from image import ImageProcessor

if __name__ == "__main__":
    img = ImageProcessor("tests/Original.jpg")
    print("Processing...")
    img.mosaic_blur(10, 3, True)\
    .save("tests/Blur.jpg")\
    .contrast(50, True)\
    .save("tests/Contrast.jpg")
    print("Done!")