import cv2 as cv
from object_detection import ObjectDetection

od=ObjectDetection()

capture = cv.VideoCapture("ship.mp4")
while True: 
    ret, frame = capture.read()
    if not ret:
        break
    (class_ids,scores,boxes) = od.detect(frame)
    for box in boxes:
        (x,y,w,h) = box 
        cv.rectangle(frame,(x,y),(x+w,y+h), (0,255,0),2)

    cv.imshow("Op", frame)

    key=cv.waitKey(1)

    if key==27:
        break
capture.release()
cv.destroyAllWindows()
