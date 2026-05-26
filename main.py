import os
import cvzone
import cv2
from cvzone.PoseModule import PoseDetector

shirtFolderPath = "Resources/Shirts"
#listShirts = os.listdir(shirtFolderPath)
listShirts = [
    f for f in os.listdir(shirtFolderPath)
    if f.lower().endswith(('.png', '.jpg', '.jpeg'))
]


cap = cv2.VideoCapture(0)
# cap = cv2.VideoCapture("Resources/Videos/1.mp4")
detector = PoseDetector()
# detector = PoseDetector(staticMode=False,
#                             modelComplexity=1,
#                             smoothLandmarks=True,
#                             enableSegmentation=False,
#                             smoothSegmentation=True,
#                             detectionCon=0.5,
#                             trackCon=0.5)

fixedRatio = 262 / 190  # widthOfShirt/widthOfPoint11to12
shirtRatioHeightWidth = 581 / 440
imageNumber = 0
imgButtonRight = cv2.imread("Resources/button.png", cv2.IMREAD_UNCHANGED)
imgButtonLeft = cv2.flip(imgButtonRight, 1)
counterRight = 0
counterLeft = 0
selectionSpeed = 10

while True:
    success, img = cap.read()
    # Find the human pose in the frame
    img = detector.findPose(img)
    lmList, bboxInfo = detector.findPosition(img, draw=False, bboxWithHands=False)

    # Check if any body landmarks are detected
    if lmList:
        lm11 = lmList[11][0:2]
        lm12 = lmList[12][0:2]

        imgShirt = cv2.imread(os.path.join(shirtFolderPath, listShirts[imageNumber]), cv2.IMREAD_UNCHANGED)

        widthOfShirt = int((lm11[0] - lm12[0]) * fixedRatio)
        print(widthOfShirt)
        imgShirt = cv2.resize(imgShirt, (widthOfShirt, int(widthOfShirt * shirtRatioHeightWidth)))
        currentScale = (lm11[0] - lm12[0]) / 190
        offset = int(44 * currentScale), int(48 * currentScale)

        try:
            img = cvzone.overlayPNG(img, imgShirt, (lm12[0] - offset[0], lm12[1] - offset[1]))
        except:
            pass

        img = cvzone.overlayPNG(img, imgButtonRight, (1074, 293))
        img = cvzone.overlayPNG(img, imgButtonLeft, (72, 293))

        if lmList[16][0] < 300:
            counterRight += 1
            cv2.ellipse(img, (139, 360), (66, 66), 0, 0,
                        counterRight * selectionSpeed, (0, 255, 0), 20)
            if counterRight * selectionSpeed > 360:
                counterRight = 0
                if imageNumber < len(listShirts) - 1:
                    imageNumber += 1
        elif lmList[15][0] > 900:
            counterLeft += 1
            cv2.ellipse(img, (1138, 360), (66, 66), 0, 0,
                        counterLeft * selectionSpeed, (0, 255, 0), 20)
            if counterLeft * selectionSpeed > 360:
                counterLeft = 0
                if imageNumber > 0:
                    imageNumber -= 1

        else:
            counterRight = 0
            counterLeft = 0

    cv2.imshow("Image",img)
    cv2.waitKey(1)