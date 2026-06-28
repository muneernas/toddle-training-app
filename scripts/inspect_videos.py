import cv2
from pathlib import Path

media = Path(__file__).resolve().parents[1] / "public" / "media" / "lessons"

for name in ["weekly-planner.mp4", "assignments.mp4"]:
    path = media / name
    cap = cv2.VideoCapture(str(path))
    w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    ret, frame = cap.read()
    cap.release()
    print(name, "size", w, "x", h, "fps", fps, "frames", frames)
    if ret:
        out = media / f"_frame_{name.replace('.mp4', '')}.jpg"
        cv2.imwrite(str(out), frame)
        print("saved", out)

        # Scan rows for end of top chrome (look for row with high variance after uniform header)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        for y in range(0, min(200, h), 2):
            row = gray[y]
            print(f"  y={y} mean={row.mean():.1f} std={row.std():.1f}")
