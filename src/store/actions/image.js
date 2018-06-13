// @flow
export const IMAGE = {
  SET: 'SET_IMAGE',
  SET_CROPPED: 'SET_CROPPED_IMAGE',
};

export const saveImage = (image: String): Object => ({
  type: IMAGE.SET,
  image,
});

export const saveCroppedImage = (image: String, points: Object): Object => ({
  type: IMAGE.SET_CROPPED,
  image,
  points,
});