import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    home: {
      name: "Habìbíe Bayezid",
      profesi: "Web Developer",
      text: "I enjoy creating experiences that are fast, accessible, and involve trying new things.",
    },
    about: {
      title: "About Me",
      paragrafOne:
        "Hey there! Im Habibie. I embarked on my web development journey in 2020, right at the onset of the pandemic. With ample time on my hands, I delved into web development through Facebook tutorials and immersed myself in a plethora of YouTube videos to delve deeper into the realm of backend development.",
      paragrafTwo:
        "There are a lot of things and technologies to learn in frontend development and I am motivated to learn as much as possible. I enjoy learning something new and getting feedback to make myself better and improve.",
    },
    experience: {
      title: "Experience",
      data: [
        {
          id: 1,
          work: "PT. ARG Solusi Teknologi",
          position: "School Internship",
          time: "2023",
          location: "Padang, Indonesia",
          link: "https://argenesia.com",
          description:
            "I completed an internship program that focused on developing skills using Laravel. During this internship, I learned intensively to build and develop projects with Laravel, including integration with APIs. I also studied with teams such as back-end, DevOps, UI/UX, and QA/SA to ensure that we could build high-quality websites for the market. I also helped build the Ropanasuri Hospital Information System as a front-end developer, with guidance from my mentor.",
        },
        {
          id: 2,
          work: "SMKN 2 Padang Panjang",
          position: "Freelancer",
          time: "2024",
          location: "Padang Panjang, Indonesia",
          link: "https://smkn2-padangpanjang.sch.id",
          description:
            "I have experience as a freelancer for SMKN 2 Padang Panjang, where I developed the bell application and collaborated with the school's Teaching Factory. This application is designed to make it easier to manage and use the school bell system digitally. Apart from that, I also created a web application for the election of the student council president at the same school. In this project, I designed an intuitive user interface and implemented features that support an efficient and transparent selection process. This second project gave me valuable experience in application development and collaboration with educational institutions.",
        },
      ],
    },
    project: {
      title: "My Projectss",
      data: [
        {
          id: 1,
          title: "Masalah Gw",
          link: "https://masalahgw.vercel.app",
          img: "/img/project/masalahgw.png",
          description:
            "An informal forum designed as a place for you all to hang out. Here, informal language creates a relaxed and comfortable atmosphere, allowing us and our users to feel freer to share, discuss and socialize.",
          build: "",
        },
        {
          id: 2,
          title: "Bell",
          link: "null",
          img: "/img/project/masalahgw.png",
          description:
            "Enjoy the convenience of managing time with the automatic bell application. Set bell schedules for schools, factories or offices easily and quickly. Make sure the bell rings on time, without hassle and efficiently.",
          build: "",
        },
      ],
    },
  };
  return NextResponse.json(data);
}
