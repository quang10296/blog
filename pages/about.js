import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { Analytics } from '@vercel/analytics/react'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/avatar.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  const { author, email, linkedin, github } = siteMetadata
  return (
    <>
      <Head>
        <title>{`Tôi là ai ?`}</title>
        <meta
          name="description"
          content="Tôi là một lập trình viên di động đang trên con đường phát triển bản thân.
          Nếu bạn cũng có mong muốn đó thì tôi hi vọng những bài viết tôi chia sẻ có thể giúp bạn một phần, hay chí ít thì cũng tạo động lực cho bạn trên con đường của mình !
          Cảm ơn đã ghé thăm ~~"
        />
      </Head>
      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="portrait of Quang Nguyen"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Xin chào !
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Tôi là Quang.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Tôi màu hồng.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Nếu bạn nhận 100 tỷ với một điều kiện :"Sau khi có 100 tỷ thì ngày mai bạn không còn thức dậy nữa.". Bạn có nhận không ? <br />
                Nếu bạn chọn ngày mai vẫn thức dậy thay vì 100 tỷ thì mỗi ngày thức dậy là một ngày đáng quý. <br />
                <br />
              </p>
              <p>
                Bên cạnh đó đừng quên đặt mục tiêu cho bản thân.
                Đừng nghĩ là mục tiêu cá nhân của bạn chỉ phục vụ bạn.
                Đúng. Nó phục vụ bạn nhưng nó còn có tác dụng với những người xung quanh bạn .
                Ân hận nhất chẳng phải là mình không có năng lực để giúp đỡ những người đã đối tốt với mình hay sao !
              </p>
              <p>
                Vì thế đừng quên đặt mục tiêu để phát triển bản thân và sống trọn vẹn từng ngày với những người thân, những người quan tâm đến bạn nhé !
              </p>
             
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href={github} icon={GitHubIcon} className="mt-4">
                Facebook nè !
              </SocialLink> */}
              <SocialLink href={linkedin} icon={LinkedInIcon} className="mt-4">
                LinkedIn nè
              </SocialLink>
              <SocialLink
                href={`mailto:${email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                duyquangnguyen10296@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <Analytics />
    </>
  )
}
