import React from 'react'
import {motion, transform} from 'framer-motion'
import './services.scss'


const variants = {
    initial: {
      x: -200,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

function Services() {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.p> I excel in articulating ideas,fostering more
impactful and clear communication. <br /> I outshine in collaborative motion.environments and contribute
actively to team success.
</motion.p>
<motion.hr />
        </motion.div>

        <motion.div className="titleContainer" variants={variants}>
            <motion.div className="title">
                <img src="dev.jpeg" alt="dev" />
                <h1><motion.b whileHover={{color:"rgb(17, 112, 213)"}}>Vision </motion.b> to</h1>
            </motion.div>
            <motion.div className="title">
                <motion.h1><motion.b whileHover={{color:"rgb(17, 112, 213)"}}>Innovate </motion.b></motion.h1>
                <motion.button>WHAT AM I GOOD AT?</motion.button>
            </motion.div>
        </motion.div>
      <motion.div className="listContainer" variants={variants}>

  <motion.div className="box" whileHover={{ backgroundColor: "rgb(15, 49, 79)" }}>
    <motion.h2>Frontend Development</motion.h2>
    <motion.p>
      HTML, CSS, JavaScript, TypeScript<br />
      React.js, Redux Toolkit, Context API<br />
      REST API Integration
    </motion.p>
    
  </motion.div>

  <motion.div className="box" whileHover={{ backgroundColor: "rgb(15, 49, 79)" }}>
    <motion.h2>Styling</motion.h2>
    <motion.p>
      Tailwind CSS, SCSS, NativeWind<br />
      Framer Motion
    </motion.p>
    
  </motion.div>

  <motion.div className="box" whileHover={{ backgroundColor: "rgb(15, 49, 79)" }}>
    <motion.h2>Mobile App Development</motion.h2>
    <motion.p>
      React Native, Expo<br />
      Android Studio, Xcode<br />
      Deep Linking, React Navigation
    </motion.p>
    
  </motion.div>

  <motion.div className="box" whileHover={{ backgroundColor: "rgb(15, 49, 79)" }}>
    <motion.h2>Backend</motion.h2>
    <motion.p>
      Node.js, Express.js<br />
      AWS Serverless Microservices Architecture<br />
      MySQL, MongoDB, Firebase<br />
      Sequelize
    </motion.p>
    
  </motion.div>

  <motion.div className="box" whileHover={{ backgroundColor: "rgb(15, 49, 79)" }}>
    <motion.h2>Cloud & DevOps</motion.h2>
    <motion.p>
      AWS services: EC2, S3, IAM, SSM, CloudWatch, Lambda, RDS, API Gateway, CodePipeline, Amplify,
      <br />
      Docker (Basic)
    </motion.p>
    
  </motion.div>

  <motion.div className="box" whileHover={{ backgroundColor: "rgb(15, 49, 79)" }}>
    <motion.h2>FinTech</motion.h2>
    <motion.p>
      Payment Gateways (Adyen)<br />
      PCI Compliance Basics
    </motion.p>
    
  </motion.div>

   <motion.div className="box" whileHover={{ backgroundColor: "rgb(15, 49, 79)" }}>
    <motion.h2>Tools</motion.h2>
    <motion.p>
      Git, GitHub, Postman, JIRA, Confluence
    </motion.p>
    
  </motion.div>
  <motion.div className="box" whileHover={{ backgroundColor: "rgb(15, 49, 79)" }}>
    <motion.h2>Monitoring and Analytics</motion.h2>
    <motion.p>
      Grafana, InfluxDB, APIs
    </motion.p>
    
  </motion.div>
  <motion.div className="box" whileHover={{ backgroundColor: "rgb(15, 49, 79)" }}>
    <motion.h2>Soft Skills</motion.h2>
    <motion.p>
     Communication, Collaboration, Prioritization
    </motion.p>
    
  </motion.div>

</motion.div>


      
    </motion.div>
  )
}

export default Services
