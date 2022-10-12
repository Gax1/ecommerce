export const cellphonesTestList = [
  {
    id: "0",
    brand: "test-brand",
    model: "test-model",
    price: "",
    imgUrl: "test-img",
  },
];

for (let i = 0; i < 22; i++) {
  cellphonesTestList.push({
    id: `${i + 1}`,
    brand: "test-brand",
    model: "test-model",
    price: "test-price",
    imgUrl: "test-img",
  });
}

export const cellphoneDetailTest = {
  brand: "test-brand",
  model: "test-model",
  price: "test-price",
  imgUrl: "test-image-url",
  cpu: "test-cpu",
  ram: "test-ram",
  displayResolution: "test-resolution",
  battery: "test-battery",
  primaryCamera: ["test-MP", "test"],
  os: "test-os",
  dimentions: "test-dimentions",
  weight: "test-weight",
};
