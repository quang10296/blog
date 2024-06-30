/* eslint-disable prettier/prettier */
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiGit,
} from 'react-icons/si'

import Image from './Image'
import { motion } from 'framer-motion'
import { showHoverAnimation, removeHoverAnimation } from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/FramerMotionVariants'

const skills = [
  {
    name: 'VPBANK',
    key : 'TypeScript',
    logo: '/static/images/company/vpbank_logo.png',
  },
  {
    name: 'MOBIFONE IT CENTER',
    key : 'SiJavascript',
    logo: '/static/images/company/mobifone_logo.png',
  },
  {
    name: 'MOBIFONE GLOBAL',
    key : 'SiHtml5',
    logo: '/static/images/company/mobifone_global_logo.png',
  },
  {
    name: 'SUNTECH LTD',
    key : 'SiCss3',
    logo: '/static/images/company/sunteck_logo.png',
  },


  // {
  //   name: 'React',
  //   logo: SiReact,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   logo: SiTailwindcss,
  // },
  // {
  //   name: 'Nextjs',
  //   logo: SiNextdotjs,
  // },
  // {
  //   name: 'Node.js',
  //   logo: SiNodedotjs,
  // },
  // {
  //   name: 'PostgreSQL',
  //   logo: SiPostgresql,
  // },
  // {
  //   name: 'Redux',
  //   logo: SiRedux,
  // },

  // {
  //   name: 'Firebase',
  //   logo: SiFirebase,
  // },
  // {
  //   name: 'Git',
  //   logo: SiGit,
  // },
]

const Skills = () => {
  return (
    <>
      <span className="font-poppins title-font text-3xl font-bold">Những nơi tôi đã được làm việcccc</span>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="my-10 grid grid-cols-3 gap-4"
      >
        {skills.map((skill, index) => {
          return (
            <motion.div
              title={skill.name}
              variants={popUp}
              key={skill.key}
              onMouseMove={(e) => showHoverAnimation(e)}
              onMouseLeave={(e) => removeHoverAnimation(e)}
              className="dark:bg-darkPrimary group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top"
            >
              <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                {/* <skill.logo  /> */}
                <Image
                  alt={skill.name}
                  src={skill.logo}
                  className="h-8 w-8"
                  width={30}
                  height={30}
                />
              </div>
              <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

export default Skills
