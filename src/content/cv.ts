export const SITE_PUBLISHED = true; // User approved

export type Project = {
  name: string | null;
  purpose: string | null;
  techStack: string | null;
  role: string | null;
  link: string | null;
};

export type CVContent = {
  name: string | null;
  title: string | null;
  summary: string | null;
  email: string | null;
  github: string | null;
  linkedin: string | null;
  skills: {
    core: string | null;
    related: string | null;
  };
  projects: Project[];
};

export const cvData: CVContent = {
  name: "Mai Trương Thái Lâm",
  title: "Backend Developer Intern",
  summary: "Sinh viên ngành Công Nghệ Thông Tin tại trường Đại học Công Nghệ Thông Tin (UIT - ĐHQG TP.HCM), định hướng phát triển chuyên sâu trong lĩnh vực Backend. Sở hữu tinh thần ham học hỏi, khả năng tiếp cận nhanh với công nghệ mới và tư duy giải quyết vấn đề linh hoạt. Đã tự thiết kế và xây dựng các dự án cá nhân nhằm trau dồi kỹ năng thực chiến và tư duy hệ thống. Đang tìm kiếm cơ hội thực tập để áp dụng kiến thức vào môi trường thực tế, đóng góp giá trị và phát triển cùng công ty.",
  email: "prod.magegr@gmail.com",
  github: "github.com/mage19vn",
  linkedin: null,
  skills: {
    core: "Python, C++, Godot, Django, FastAPI",
    related: "Next.js, Kotlin, Docker, Redis, Blockly",
  },
  projects: [
    {
      name: "Web Compiler",
      purpose: "Xây dựng hệ thống biên dịch code trực tuyến (hỗ trợ C++, Python) phục vụ mục đích dạy và học lập trình.",
      techStack: "Python, Django, Docker",
      role: "Thiết kế và phát triển toàn bộ hệ thống (Solo Developer). Tích hợp Docker để tạo môi trường thực thi code an toàn (sandbox) và tối ưu hóa hệ thống backend với Django.",
      link: "https://github.com/mage19vn/idleuni",
    },
    {
      name: "PVTrobotcoding (Robot Coding Simulator)",
      purpose: "Xây dựng trình giả lập trên nền web hỗ trợ người dùng lập trình và điều khiển robot.",
      techStack: "HTML, CSS, JavaScript, Blockly",
      role: "Phát triển toàn bộ ứng dụng từ giao diện người dùng đến logic tương tác xử lý các khối lệnh Blockly.",
      link: "https://github.com/mage19vn/duanwebpvtrobotcoding",
    }
  ]
};
