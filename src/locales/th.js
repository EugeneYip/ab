const th = {
  badge: "AI Page Publisher",
  heroTitle: ["เผยแพร่หน้า AI", "แค่ push ครั้งเดียว"],
  heroSubtitle:
    "เทมเพลตง่าย ๆ สำหรับเปลี่ยน React component ที่ AI สร้างให้เป็นเว็บไซต์จริง เปลี่ยนไฟล์เดียว Push ขึ้น GitHub เสร็จ",
  ctaPrimary: "ใช้เทมเพลตนี้",
  ctaSecondary: "อ่าน README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.th.md",
  includedLabel: "รวมมาให้แล้ว",
  includedTitle: "มีอะไรบ้าง",
  includes: [
    "คอมโพเนนต์ shadcn/ui กว่า 40 ตัว",
    "แพ็กเกจติดตั้งล่วงหน้ากว่า 160 ตัว",
    "Tailwind CSS พร้อมใช้งาน",
    "ดีพลอยด้วย GitHub Actions",
    "รองรับโดเมนที่กำหนดเอง",
    "ตรวจจับ base path อัตโนมัติ",
  ],
  howItWorksLabel: "วิธีการทำงาน",
  howItWorksTitle: "สามขั้นตอนสู่การเผยแพร่",
  howItWorksSubtitle:
    "ไม่ต้องมีประสบการณ์เขียนโค้ด ขอ JSX จาก AI วางลงไป push แค่นั้น",
  steps: [
    {
      number: "01",
      title: "ขอ JSX จาก AI",
      body: "บอก Claude, ChatGPT หรือ AI ตัวไหนก็ได้ให้สร้างหน้าเว็บของคุณเป็น React component ในรูปแบบ JSX",
    },
    {
      number: "02",
      title: "ตั้งค่า repo ของคุณ",
      body: "ที่หน้า GitHub คลิก “Use this template” → “Create a new repository” เพื่อสร้าง repo ของตัวเอง ชื่อผู้ใช้ GitHub และชื่อ repo จะกำหนด URL เว็บไซต์ของคุณ จากนั้นไปที่ Settings → Pages แล้วตั้งค่า Source เป็น GitHub Actions",
    },
    {
      number: "03",
      title: "วางแล้วบันทึก",
      body: "วาง JSX ที่ AI สร้างขึ้นลงใน src/App.jsx — ลบเนื้อหาเดิมทั้งหมดแล้วแทนที่ — จากนั้นบันทึกไฟล์ GitHub Actions จะบิลด์และเผยแพร่เว็บไซต์ให้อัตโนมัติ",
    },
  ],
  filesLabel: "ไฟล์ของคุณ",
  filesTitle: "ต้องเปลี่ยนอะไร",
  filesSubtitle:
    "ส่วนใหญ่แค่แก้ไฟล์เดียว อีกสองไฟล์เป็นตัวเลือกเพิ่มเติม",
  files: [
    { name: "src/App.jsx", tag: "จำเป็น", desc: "วาง JSX ที่ AI สร้างให้ตรงนี้ นี่คือไฟล์เดียวที่ต้องเปลี่ยน", required: true },
    { name: "index.html", tag: "ไม่บังคับ", desc: "อัปเดตชื่อหน้า คำอธิบาย และ Google Analytics ให้ตรงกับเว็บไซต์ของคุณ", required: false },
    { name: "public/CNAME", tag: "ไม่บังคับ", desc: "ตั้งค่าโดเมนที่กำหนดเอง ไม่ต้องการก็ปล่อยไว้ตามเดิม", required: false },
  ],
  tipLabel: "เคล็ดลับ",
  tipText: "หากโค้ดจาก AI ใช้แพ็กเกจที่ไม่ได้รวมมาในเทมเพลต ให้รัน",
  tipCommand: "npm run check",
  tipAfter: "เพื่อค้นหาและแก้ไข dependency ที่ขาดหาย",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "สงวนลิขสิทธิ์",
  langLabel: "ภาษา",
  themeLight: "โหมดสว่าง",
  themeDark: "โหมดมืด",
  promptLabel: "เทมเพลตพรอมต์",
  promptHint: "คัดลอกพรอมต์นี้ไปวางในเครื่องมือ AI ของคุณ แล้วเติมข้อมูลในช่องว่าง",
  promptVariants: [
    { label: "แลนดิ้งเพจ", template: `สร้างแลนดิ้งเพจในรูปแบบ JSX สำหรับโปรโมตสินค้าหรือบริการ
หัวข้อ:
สไตล์:
รายละเอียด:
ดูไฟล์ที่แนบมาเป็นข้อมูลอ้างอิง ถ้ามี
ส่งเป็นไฟล์ดาวน์โหลดหรือแสดงใน Canvas` },
    { label: "พอร์ตโฟลิโอ", template: `สร้างหน้าพอร์ตโฟลิโอส่วนตัวในรูปแบบ JSX
หัวข้อ:
สไตล์:
รายละเอียด:
ดูไฟล์ที่แนบมาเป็นข้อมูลอ้างอิง ถ้ามี
ส่งเป็นไฟล์ดาวน์โหลดหรือแสดงใน Canvas` },
    { label: "แดชบอร์ด", template: `สร้างแดชบอร์ดผู้ดูแลในรูปแบบ JSX
หัวข้อ:
สไตล์:
รายละเอียด:
ดูไฟล์ที่แนบมาเป็นข้อมูลอ้างอิง ถ้ามี
ส่งเป็นไฟล์ดาวน์โหลดหรือแสดงใน Canvas` },
    { label: "บล็อก", template: `สร้างหน้าแรกบล็อกในรูปแบบ JSX
หัวข้อ:
สไตล์:
รายละเอียด:
ดูไฟล์ที่แนบมาเป็นข้อมูลอ้างอิง ถ้ามี
ส่งเป็นไฟล์ดาวน์โหลดหรือแสดงใน Canvas` },
    { label: "SaaS", template: `สร้างหน้าผลิตภัณฑ์ SaaS ในรูปแบบ JSX
หัวข้อ:
สไตล์:
รายละเอียด:
ดูไฟล์ที่แนบมาเป็นข้อมูลอ้างอิง ถ้ามี
ส่งเป็นไฟล์ดาวน์โหลดหรือแสดงใน Canvas` },
  ],
  promptCopy: "คัดลอก",
  promptCopied: "คัดลอกแล้ว!",
};

export default th;
