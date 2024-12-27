import Link from 'next/link'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoCall, IoLogoFacebook } from 'react-icons/io5'
import Notification from './Notification'
import Button from './Button'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="-m-1 p-1 " {...props}>
      <Icon className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    </Link>
  )
}

function CopyToClipboard({ icon: Icon, text, ...props }) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(text.contact)
    setShow(!show)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <div className="-m-1 p-1 " {...props}>
      <Icon
        className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200"
        onClick={handleClick}
      />
      <Notification show={show} setShow={setShow} text={text} />
    </div>
  )
}

export default function Hero() {
  return (
    <div className="mb-5 max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-zinc-100 sm:text-5xl">
        Hi, <br />
        Chào mừng đến với blog !<br />
      </h1>
      <p className="mt-6 mb-4 text-base text-gray-600 dark:text-gray-400">
        Tôi đang trên con đường phát triển bản thân.<br />
        Nếu bạn cũng có mong muốn đó thì tôi hi vọng những bài viết tôi chia sẻ có thể giúp bạn một phần, hay chí ít thì cũng tạo động lực cho bạn trên con đường của mình !<br />
        Cảm ơn đã ghé thăm ~~ <br />
      </p>
      <Button href="/static/PM-NGUYEN-DUY-QUANG.pdf">
        Đây là CV của tôi.
      </Button>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://www.linkedin.com/in/duyquangnguyen10296/"
          aria-label="LinkedIn nè !"
          icon={IoLogoLinkedin}
        />
        <SocialLink
          href="https://www.facebook.com/duyquangnguyen10296?locale=vi_VN"
          aria-label="Facebook nè !"
          icon={IoLogoFacebook}
        />
        <CopyToClipboard
          text={{ contact: 'duyquangnguyen10296@gmail.com', type: 'Email' }}
          aria-label="Email nè !"
          icon={IoMail}
        />
        <CopyToClipboard
          text={{ contact: '0962389024', type: 'Phone number' }}
          aria-label="Số điện thoại của tôi"
          icon={IoCall}
        />
      </div>
    </div>
  )
}
