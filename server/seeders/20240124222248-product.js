"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Products", [
      {
        product_name: "CPU AMD Ryzen 3 3200G BOX, s. AM4",
        product_description:
          "Codename: Raven Ridge • Architecture: Zen • cores: 4 • Threads: 4 • Base clock: 3.60GHz • Turbo clock: 3.70GHz • TDP: 65W • Manufacturing process: 14nm+ (14LPP FinFET) • Interface: SMI • L2 cache: 2MB (4x 512kB) • L3 cache: 4MB • PCIe-Lanes: 16x (PCIe 3.0), not available (PCIe 2.0) • Memory max.: 128GB • Memory controller: Dual Channel PC4-23466U (DDR4-2933) • Memory bandwidth: 46.9GB/s • Stepping: ZP-B2h • Launch: 2018/Q1 • Segment: desktop • Socket: AM4 (PGA) • Chipset Support: A320, B350, B450, X370, X470 • multiprocessor option: not available • Heat spreader contact means: thermal grease • IGP: AMD Vega8 • IGP-Shader: 512 (8 Compute Units) • IGP clock: 1126MHz • IGP interface: HDMI 2.0b (3840x2160@60Hz), DisplayPort 1.4 (3840x2160@60Hz) • IGP computing power: 1126GFLOPS • IGP-Features: DirectX 12.1, OpenGL 4.5, Vulkan 1.0, AMD FreeSync 2, AMD Trueaudio, AMD Eyefinity, H.265 encode/decode, VP9 encode/decode, HDCP 2.2 • CPU-Features: ECC-support, Turbo Core 3.0, VT-Vi, X86-64, AMD-V, AVX, AVX2, AES, NX-bit, EVP, unlocked multiplier, TDP-down (45W), incl. CPU cooler (AMD Wraith Stealth)",
        product_image: "./images/CPU AMD Ryzen3 3200G-Box s.AM4.jpg",
        product_price: 90.52,
        product_stock: 20,
        category_id: 1,
      },
      {
        product_name: "Aerocool Cylon 4 RGB, ACTC-CL30410.01",
        product_description:
          "Design Tower cooler. Dimensions 127x155x76mm (WxHxD). Fan(s) 1x 120x120x25mm, 800-1800rpm, 44.1-89.2m3/h, 0.72-1.21mmH2O, 14-26dB(A). Weight 748g. Connector 4-Pin PWM, 3-Pin ARGB (+5V/DATA/GND). Socket 775, 1150, 1151, 1155, 1156, 1200, 2011, 2066, AM2, AM2+, AM3, AM3+, AM4, FM1, FM2. TDP-Class 145W. Lighting RGB. Special features 4 heatpipes (6mm), Heatpipe-Direct-Touch (HDT)",
        product_image: "./images/Aerocool Cylon 4 RGB ACTC-CL30410.01.jpg",
        product_price: 42.1,
        product_stock: 20,
        category_id: 4,
      },
      {
        product_name:
          "AMD Bundle CPU AMD Threadripper 7960x + ASRock TRX50 WS, 100-100001352WOF + ASRock TRX50 WS 90-MXBN40-A0UAYZ",
        product_description:
          "ASRock TRX50 WS, 90-MXBN40-A0UAYZ. CPU AMD Ryzen Threadripper 7960X, BOX bez coolera, LGA4844.",
        product_image:
          "./images/AMD Bundle CPU AMD Threadripper 7960x + ASRock TRX50 WS, 100-100001352WOF + ASRock TRX50 WS 90-MXBN40-A0UAYZ.jpg",
        product_price: 2836.84,
        product_stock: 20,
        category_id: 3,
      },
      {
        product_name:
          "Asrock Intel Arc A380 Challenger ITX 6GB OC, 6GB GDDR6, 90-GA3KZZ-00UANF",
        product_description:
          "I 2.0b, 3x DisplayPort 2.0. Graphics Intel Arc A380 Graphics - 6GB GDDR6 - desktop. Chip ACM-G11 / alchemist DG2-128 'Gen 12.7', 8Xe-Core, 157mm2. Manufacturing Process TSMC 6nm. Chip clock 2000MHz, Boost: 2250MHz. Memory 6GB GDDR6, 1937MHz, 15.5Gbps (15496MHz effective), 96bit, 186GB/s. Shader Units/TMUs/ROPs 1024/64/32. TDP/TGP 75W (Intel).External power supply 1x 8-Pin PCIe. Cooling 1x Axial-fan (100mm). Total height dual-slot. Dimensions 190x124x39mm. Special features Real-Time Ray Tracing (8 Cores), AV1 Encode, AV1 Decode, 0dB-zero-fan-mode. Interface PCIe 4.0 x16 (x8). Computing power 4.61 TFLOPS (FP32), 1.15 TFLOPS (FP64). DirectX 12 Ultimate (12_2). OpenGL 4.6. OpenCL 3.0. Vulkan 1.3. Shader model 6.6",
        product_image:
          "./images/Asrock Intel Arc A380 Challenger ITX 6GB OC, 6GB GDDR6, 90-GA3KZZ-00UANF.jpg",
        product_price: 170.53,
        product_stock: 20,
        category_id: 2,
      },
      {
        product_name: "DDR2 1024Mb sodimm 667MHz TS/Samsung, Bulk",
        product_description: "TRanscend",
        product_image:
          "./images/DDR2 1024Mb sodimm 667MHz TS-Samsung, Bulk.jpg",
        product_price: 21.05,
        product_stock: 20,
        category_id: 5,
      },
      {
        product_name: "CPU AMD Ryzen 3 4300G BOX, s. AM4, 100-100000144BOX",
        product_description:
          "Cores 4 (4C). Threads 8. Turbo Clock 4.00GHz. Base Clock 3.80GHz. TDP 65W, 45W cTDP-down. Graphics yes (AMD Radeon Graphics). Socket AMD AM4 (PGA1331) chipset suitability A320 (depends on modell), A520, B350 (depends on modell), B450 (depends on modell), B550, X370 (depends on modell), X470 (depends on modell), X570. Codename Renoir. Architecture Zen 2. Manufacturing Process. TSMC 7nm L2 cache 2MB (4x 512kB) L3 cache. 4MB Memory controller. Dual Channel DDR4-3200 (PC4-25600), 51.2GB/?s, max. 128GB",
        product_image:
          "./images/CPU AMD Ryzen 3 4300G BOX, s. AM4, 100-100000144BOX.jpg",
        product_price: 103.16,
        product_stock: 20,
        category_id: 1,
      },
      {
        product_name: "Aerocool Cylon 4F RGB, ACTC-CL30420.03",
        product_description:
          "Design Tower cooler. Dimensions 127x155x76mm (WxHxD). Fan(s) 1x 120x120x25mm, 800-1800rpm, 44.1-89.2m3/h, 0.72-1.21mmH2O, 14-26dB(A). Weight 748g. Connector 4-Pin PWM, 3-Pin ARGB (+5V/DATA/GND). Socket 775, 1150, 1151, 1155, 1156, 1200, 2011, 2066, AM2, AM2+, AM3, AM3+, AM4, FM1, FM2. TDP-Class 145W. Lighting RGB. Special features 4 heatpipes (6mm), Heatpipe-Direct-Touch (HDT)",
        product_image: "./images/Aerocool Cylon 4F RGB, ACTC-CL30420.03.jpg",
        product_price: 41.05,
        product_stock: 20,
        category_id: 4,
      },
      {
        product_name:
          "Asrock A620M Pro RS, AMD A620, All TDP, AM5, DDR5, 90-MXBLN0-A0UAYZ",
        product_description:
          "Without TDP restriction (check manufacturer list). Form factor µATX. Plinth AMD AM5. Chipset AMD A620. CPU Compatibility Ryzen 7000. RAM 4x DDR5 DIMM, dual PC5-48000U/DDR5-6000 (OC), max. 128GB (UDIMM). Expansion slots 1x PCIe 4.0 x16, 2x M.2/M-Key (PCIe 4.0 x4, 2280/2260), 1x M.2/M-Key (PCIe 3.0 x2, 2280/2260), 1x M.2/E-Key (PCIe, 2230). External connections 1x HDMI 2.1 (iGPU), 1x DisplayPort 1.4 (iGPU), 1x USB-C 3.0 (5Gb/s), 3x USB-A 3.0 (5Gb/s), 4x USB-A 2.0 (480Mb/s), 1x Gb LAN (Realtek RTL8111H), 3x jack, 2x mounting hole for antenna connection (RP-SMA). Internal connections 1x USB-C 3.0 Key-A header (5Gb/s), 1x USB 3.0 header (5Gb/s, 2x USB 3.0), 2x USB 2.0 header (480Mb/s, 4x USB 2.0), 4x SATA 6Gb/s (A620), 1x TPM header, 1x speaker header. Header Cooling 1x CPU fan 4-pin, 1x CPU fan/pump 4-pin, 3x fan/pump 4-pin. Header Lighting 1x 4-pin RGB (+12V/G/R/B, max. 3A), 3x 3-pin ARGB (+5V/DATA/GND, max. 3A). Buttons/Switches USB BIOS Flashback (external). Audio 7.1 (Realtek ALC897). Graphic iGPU. Wireless N/A. RAID Level 0/1/10 (A620). Multi-GPU N/A. Electricity connections 1x 24-pin ATX, 1x 8-pin EPS12V. VRM 8 virtual phases (6+2), 4 real phases (3+1), PWM controller: RT3674AE (max 5 phases). MOSFETs CPU 6x 50A SiC634. MOSFETs SoC 2x 50A SiC634. Lighting RGB, 1 zone (accent right). BIOS 1x 32MB (256Mb). Particularities Audio+solid capacitors, Diagnostic LED (LED indicators), 1x M.2 passive cooler, integrated I/O panel, Onboard TPM 2.0 support (AMD fTPM)",
        product_image:
          "./images/Asrock A620M Pro RS, AMD A620, All TDP, AM5, DDR5, 90-MXBLN0-A0UAYZ.jpg",
        product_price: 149.47,
        product_stock: 20,
        category_id: 3,
      },
      {
        product_name: "Asrock RX6400 Challenger ITX, GDDR6, 90-GA3CZZ-00UANF",
        product_description:
          "Connectors 1x HDMI 2.1, 1x DisplayPort 1.4a. Graphics AMD Radeon RX 6400 - 4GB GDDR6 - desktop. Chip Navi 24 XL 'RDNA 2', 12CU, 107mm2. Manufacturing Process 6nm (TSMC). Chip clock 1923MHz, Boost: 2039-2321MHz. Memory 4GB GDDR6, 2000MHz, 16Gbps (16000MHz effective), 64bit, 128GB/?s. Shader Units/TMUs/ROPs 768/48/32. TDP/TGP 53W (AMD) external power supply not available. Cooling 1x Axial-fan (75mm) total height dual-slot. Dimensions 162x112x39mm. Special features Real-Time Ray Tracing, AMD Infinity cache (16MB), HDCP 2.3, AMD FreeSync, AMD Trueaudio Next, AMD Eyefinity, 0dB-zero-fan-mode. Interface PCIe 4.0 x16 (x4). Computing power 3.56 TFLOPS (FP32), 223 GFLOPS (FP64). DirectX 12 Ultimate (12_2). OpenGL 4.6. OpenCL 2.2. Vulkan 1.3. Shader model 6.6",
        product_image:
          "./images/Asrock RX6400 Challenger ITX, GDDR6, 90-GA3CZZ-00UANF.jpg",
        product_price: 194.74,
        product_stock: 20,
        category_id: 2,
      },
      {
        product_name:
          "DDR3 4GB (1x4) Corsair 1333MHz sodimm/1.35V/1.5V for Mac, CMSA4GX3M1A1333C9",
        product_description:
          "Type DDR3 SO-DIMM 204-Pin. Modules 1x 4GB. JEDEC PC3-10667S. Voltage 1.50V. Module height 30mm. Case not available. Special features not available",
        product_image:
          "./images/DDR3 4GB (1x4) Corsair 1333MHz sodimm-1.35V-1.5V for Mac, CMSA4GX3M1A1333C9.jpg",
        product_price: 27.37,
        product_stock: 20,
        category_id: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
