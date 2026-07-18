import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiExpo,
  SiGreensock,
  SiFramer,
  SiGooglechrome,
  SiNodedotjs,
  SiServerless,
  SiCloudflare,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiGrafana,
  SiInfluxdb,
  SiPostman,
  SiJira,
  SiConfluence,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  FiDatabase,
  FiSmartphone,
  FiUsers,
  FiLock,
  FiActivity,
  FiShield,
  FiSend,
  FiBarChart2,
  FiCode,
  FiGrid,
  FiBox,
  FiCloud,
} from "react-icons/fi";
import "./stack.scss";

const STACK_GROUPS = [
  {
    label: "LANGUAGES",
    items: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Java", Icon: FaJava, color: "#E76F00" },
      { name: "SQL", Icon: FiDatabase, color: "#94A3B8" },
    ],
  },
  {
    label: "FRONTEND & MOBILE",
    items: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "PWA", Icon: FiSmartphone, color: "#94A3B8" },
      { name: "React Native", Icon: SiReact, color: "#61DAFB" },
      { name: "Expo", Icon: SiExpo, color: "#F8FAFC" },
      { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
      { name: "Framer Motion", Icon: SiFramer, color: "#F8FAFC" },
      { name: "Chrome Extensions (MV3)", Icon: SiGooglechrome, color: "#4285F4" },
    ],
  },
  {
    label: "BACKEND & CLOUD",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Serverless", Icon: SiServerless, color: "#FD5750" },
      { name: "Microservices", Icon: FiBox, color: "#94A3B8" },
      { name: "Cloudflare Workers", Icon: SiCloudflare, color: "#F38020" },
      { name: "AWS Lambda", Icon: FiCloud, color: "#FF9900" },
      { name: "SQS / SNS / SES", Icon: FiCloud, color: "#FF9900" },
      { name: "EventBridge", Icon: FiCloud, color: "#FF9900" },
      { name: "DynamoDB", Icon: FiCloud, color: "#FF9900" },
      { name: "S3", Icon: FiCloud, color: "#FF9900" },
      { name: "API Gateway", Icon: FiCloud, color: "#FF9900" },
      { name: "CodePipeline", Icon: FiCloud, color: "#FF9900" },
      { name: "Cognito", Icon: FiCloud, color: "#FF9900" },
    ],
  },
  {
    label: "SECURITY & AUTH",
    items: [
      { name: "JWT", Icon: SiJsonwebtokens, color: "#F8FAFC" },
      { name: "RBAC", Icon: FiUsers, color: "#94A3B8" },
      { name: "bcrypt", Icon: FiLock, color: "#94A3B8" },
      { name: "Rate limiting", Icon: FiActivity, color: "#94A3B8" },
      { name: "Origin validation", Icon: FiShield, color: "#94A3B8" },
      { name: "postMessage API", Icon: FiSend, color: "#94A3B8" },
    ],
  },
  {
    label: "DATA & MONITORING",
    items: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
      { name: "InfluxDB", Icon: SiInfluxdb, color: "#22ADF6" },
      { name: "CleverTap", Icon: FiBarChart2, color: "#94A3B8" },
      { name: "CloudWatch", Icon: FiCloud, color: "#FF9900" },
    ],
  },
  {
    label: "TOOLS",
    items: [
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Apidog", Icon: FiCode, color: "#94A3B8" },
      { name: "JIRA", Icon: SiJira, color: "#0052CC" },
      { name: "Confluence", Icon: SiConfluence, color: "#2684FF" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "TablePlus", Icon: FiGrid, color: "#94A3B8" },
    ],
  },
];

function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="stack-wrapper">
        <div data-reveal className="stack-eyebrow">03 — TECH STACK</div>
        <h2 data-reveal>Tools I work with daily</h2>
        <div className="stack-table">
          {STACK_GROUPS.map((group) => (
            <div data-reveal key={group.label} className="stack-row">
              <div className="stack-row-label">{group.label}</div>
              <div className="stack-row-items">
                {group.items.map(({ name, Icon, color }) => (
                  <span key={name}>
                    <Icon className="stack-icon" style={{ color }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
