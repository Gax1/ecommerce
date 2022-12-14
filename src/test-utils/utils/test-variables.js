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

export const cellphoneDetailTest = [
  {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "170",
    imgUrl:
      "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
    networkTechnology: "GSM / HSPA / LTE",
    networkSpeed: "HSPA 42.2/11.5 Mbps  LTE Cat4 150/50 Mbps",
    gprs: "Yes",
    edge: "Yes",
    announced: "2016  August",
    status: "Available. Released 2016  October",
    dimentions: "191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)",
    weight: "260",
    sim: "Dual SIM (Micro-SIM/Nano-SIM)",
    displayType: "IPS LCD capacitive touchscreen  16M colors",
    displayResolution: "7.0 inches (~69.8% screen-to-body ratio)",
    displaySize: "720 x 1280 pixels (~210 ppi pixel density)",
    os: "Android 6.0 (Marshmallow)",
    cpu: "Quad-core 1.3 GHz Cortex-A53",
    chipset: "Mediatek MT8735",
    gpu: "Mali-T720MP2",
    externalMemory: "microSD  up to 128 GB (dedicated slot)",
    internalMemory: ["16 GB", "32 GB"],
    ram: "2 GB RAM",
    primaryCamera: ["13 MP", "autofocus"],
    secondaryCamera: ["2 MP", "720p"],
    speaker: "Yes",
    audioJack: "Yes",
    wlan: ["Wi-Fi 802.11 a/b/g/n", "Wi-Fi Direct", "hotspot"],
    bluetooth: ["4.0", "A2DP"],
    gps: "Yes with A-GPS GLONASS",
    nfc: "",
    radio: "FM radio",
    usb: "microUSB 2.0",
    sensors: ["Accelerometer", "proximity"],
    battery: "Non-removable Li-Ion 3400 mAh battery (12.92 Wh)",
    colors: ["Black"],
    options: {
      colors: [
        {
          code: 1000,
          name: "Black",
        },
        {
          code: 1111,
          name: "Red",
        },
      ],
      storages: [
        {
          code: 2000,
          name: "16 GB",
        },
        {
          code: 2001,
          name: "32 GB",
        },
      ],
    },
  },
  {
    id: "AasKFs5EGbyAEIKkcHQcF",
    brand: "alcatel",
    model: "Flash (2017)",
    price: "",
    imgUrl:
      "https://front-test-api.herokuapp.com/images/AasKFs5EGbyAEIKkcHQcF.jpg",
    networkTechnology: "GSM / HSPA / LTE",
    networkSpeed: "HSPA  LTE",
    gprs: "Yes",
    edge: "Yes",
    announced: "2017  April",
    status: "Available. Released 2017  May",
    dimentions: "152.6 x 75.4 x 8.7 mm (6.01 x 2.97 x 0.34 in)",
    weight: "155",
    sim: ["Dual SIM (Nano-SIM", "dual stand-by)"],
    displayType: "IPS LCD capacitive touchscreen  16M colors",
    displayResolution: "5.5 inches (~72.5% screen-to-body ratio)",
    displaySize: "1080 x 1920 pixels (~401 ppi pixel density)",
    os: "Android 6.0 (Marshmallow)",
    cpu: [
      "Deca-core (2x2.3 GHz Cortex-A72",
      "4x1.9 GHz Cortex-A53",
      "4x1.4 GHz Cortex-A53)",
    ],
    chipset: "Mediatek MT6797 Helio X20",
    gpu: "Mali-T880MP4",
    externalMemory: "microSD  up to 256 GB",
    internalMemory: ["32 GB"],
    ram: "3 GB RAM",
    primaryCamera: [
      "Dual 13 MP",
      "f/2.0",
      "phase detection autofocus",
      "dual-LED (dual tone) flash",
    ],
    secondaryCmera: [
      "Dual 8 MP + 5 MP",
      "f/2.0",
      "autofocus",
      "dual-LED (dual tone) flash",
    ],
    speaker: "Yes",
    audioJack: "Yes",
    wlan: ["Wi-Fi 802.11 b/g/n", "Wi-Fi Direct", "hotspot"],
    bluetooth: ["4.1", "A2DP"],
    gps: "Yes with A-GPS GLONASS BDS",
    nfc: "",
    radio: "FM radio",
    usb: ["Type-C 1.0 reversible connector", "USB On-The-Go"],
    sensors: [
      "Fingerprint (rear-mounted)",
      "accelerometer",
      "proximity",
      "compass",
    ],
    battery: "Non-removable Li-Ion 3100 mAh battery",
    colors: ["Titanium Grey"],
    options: {
      colors: [
        {
          code: 1000,
          name: "Titanium Grey",
        },
      ],
      storages: [
        {
          code: 2000,
          name: "32 GB",
        },
      ],
    },
  },
];

export const postTestData = {
  id: "test-id",
  colorCode: "test-color",
  storageCode: "test-storage",
};
