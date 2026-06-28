import cv2
import numpy as np
from pathlib import Path

media = Path(__file__).resolve().parents[1] / "public" / "media" / "lessons"


def find_toddle_nav_y(frame: np.ndarray) -> int:
    """First row of the dark Toddle navigation bar (below impersonation banner)."""
    h = frame.shape[0]
    for y in range(0, min(220, h)):
        gray_mean = frame[y].mean()
        if gray_mean < 45:
            # Confirm a short run of dark rows (nav bar, not a thin line)
            run = sum(1 for dy in range(5) if y + dy < h and frame[y + dy].mean() < 55)
            if run >= 4:
                return y
    return 117


def crop_video_from_y(name: str, crop_y: int) -> None:
    src = media / name
    tmp = media / f"_recrop_{name}"
    cap = cv2.VideoCapture(str(src))
    fps = cap.get(cv2.CAP_PROP_FPS)
    w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    new_h = h - crop_y

    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    writer = cv2.VideoWriter(str(tmp), fourcc, fps, (w, new_h))

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        writer.write(frame[crop_y:h, 0:w])

    cap.release()
    writer.release()
    src.unlink()
    tmp.rename(src)
    print(f"{name}: removed {crop_y}px -> {w}x{new_h}")


if __name__ == "__main__":
    for video in ["weekly-planner.mp4", "assignments.mp4"]:
        cap = cv2.VideoCapture(str(media / video))
        _, frame = cap.read()
        cap.release()
        y = find_toddle_nav_y(frame)
        print(f"{video}: nav at y={y}")
        crop_video_from_y(video, y)
