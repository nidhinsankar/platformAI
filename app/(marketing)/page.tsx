import { GithubCard } from "@/components/github-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { FAQ } from "@/components/faq";
import { freePlan, basicPlan, proPlan } from "@/config/subscriptions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/codeblock";
import { Code } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AnimatedBeamMultipleOutputDemo } from "@/components/compatible-section";

export default function IndexPage() {
  return (
    <>
      <section
        data-aos="fade-up"
        className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 py-12 md:py-24 lg:py-24"
      >
        <div className="container flex max-w-[58rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl border shadow-md bg-muted px-4 py-1.5 text-sm font-medium hover:text-white hover:bg-blue-500"
            target="_blank"
          >
            Find us on 𝕏
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Build Your Own AI <span className="text-orange-500">Sales</span>{" "}
            Representative
          </h1>
          <p className="max-w-[55rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Transform your sales process with personalized AI driven chatbots.
            Craft your own sales representative and watch your sales elevate -
            all without writing single line of code
          </p>
          <div className="space-x-4 space-y-4">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary hover:bg-orange-500"
              )}
            >
              <Icons.bot className="h-4 w-4 mr-2"></Icons.bot>
              Get Started for Free
            </Link>
          </div>
          <div className="relative w-[320px] h-[200px] md:w-[890px]  md:h-[510px] border">
            <BorderBeam />
            <Image
              data-aos="zoom-in"
              priority={false}
              className=" w-full p-4"
              src="/hero.png"
              fill
              objectFit="cover"
              // width={810}
              // height={0}
              alt="Dashboard"
            />
            {/* <div className="absolute inset-0 bg-white opacity-50"></div> */}
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        id="integrations"
        className="container py-12 md:py-24 lg:py-24"
      >
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
          <div className="space-y-6 max-w-[55rem] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Accurate, instantaneous and human-like chat responses
            </h2>
            <p className="mx-auto max-w-[45rem] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              No more robotic responses. Your customers deserve VIP, human-like
              customer service that actually answers their questions. Let our AI
              Chatbots supercharge customer experience for your website.
            </p>
          </div>
          <div className="space-x-4 space-y-4">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: "lg" }),
                "hover:bg-orange-500 bg-primary"
              )}
            >
              <Icons.bot className="h-4 w-4 mr-2"></Icons.bot>
              Try PlatformAI
            </Link>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        id="features"
        className="container space-y-6 py-12 md:py-24 lg:py-24 bg-gray-200"
      >
        <div className="mx-auto flex max-w-[64rem] flex-col items-start space-y-4">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Build your own chatbot with OpenAI&apos;s assistant. Give us the URL
            to crawl and we finish the job.
          </p>
        </div>
        {/* <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-7 mt-6"> */}
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-7 mt-6">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-purple-200 to-white shadow-lg p-2 md:col-span-7">
            <div className="flex h-[180px] md:h-[320px]  justify-between rounded-md p-6 ">
              <div className="mr-10 md:w-[40%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 260"
                >
                  <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">OpenAI Assistants</h3>
                  <p className="text-sm">
                    We use OpenAI Assistant to power our chatbots. You can use
                    GPT-4, GTP-3.5 and GPT-4o
                  </p>
                </div>
              </div>
              <div className="w-32 md:w-[500px] absolute right-0 top-0 bottom-0">
                <Image
                  src={"/lion.png"}
                  alt="wiki"
                  className="w-full"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-7 mt-6">
          <div className="relative overflow-hidden rounded-lg p-2 bg-gradient-to-b from-red-200 to-white shadow-lg md:col-span-2">
            <div className="flex h-[180px] flex-col justify-between  rounded-md p-6">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="group-hover:text-white"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 190.5 190.5"
              >
                <path
                  fill="#fff"
                  d="M95.252 142.873c26.304 0 47.627-21.324 47.627-47.628s-21.323-47.628-47.627-47.628-47.627 21.324-47.627 47.628 21.323 47.628 47.627 47.628z"
                />
                <path
                  fill="#229342"
                  d="m54.005 119.07-41.24-71.43a95.227 95.227 0 0 0-.003 95.25 95.234 95.234 0 0 0 82.496 47.61l41.24-71.43v-.011a47.613 47.613 0 0 1-17.428 17.443 47.62 47.62 0 0 1-47.632.007 47.62 47.62 0 0 1-17.433-17.437z"
                />
                <path
                  fill="#fbc116"
                  d="m136.495 119.067-41.239 71.43a95.229 95.229 0 0 0 82.489-47.622A95.24 95.24 0 0 0 190.5 95.248a95.237 95.237 0 0 0-12.772-47.623H95.249l-.01.007a47.62 47.62 0 0 1 23.819 6.372 47.618 47.618 0 0 1 17.439 17.431 47.62 47.62 0 0 1-.001 47.633z"
                />
                <path
                  fill="#1a73e8"
                  d="M95.252 132.961c20.824 0 37.705-16.881 37.705-37.706S116.076 57.55 95.252 57.55 57.547 74.431 57.547 95.255s16.881 37.706 37.705 37.706z"
                />
                <path
                  fill="#e33b2e"
                  d="M95.252 47.628h82.479A95.237 95.237 0 0 0 142.87 12.76 95.23 95.23 0 0 0 95.245 0a95.222 95.222 0 0 0-47.623 12.767 95.23 95.23 0 0 0-34.856 34.872l41.24 71.43.011.006a47.62 47.62 0 0 1-.015-47.633 47.61 47.61 0 0 1 41.252-23.815z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Easy integration</h3>
                <p className="text-sm">
                  Only include few lines of code in your website to make the
                  chatbot work.
                </p>
              </div>
              <div className="w-32 md:w-[180px] absolute right-0 bottom-0">
                <Image
                  src={"/wiki.svg"}
                  alt="wiki"
                  className="w-full"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg  p-2 md:col-span-3 bg-gradient-to-b from-blue-200 to-white shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.import></Icons.import>
              <div className="space-y-2">
                <h3 className="font-bold">User Inquiry</h3>
                <p className="text-sm">
                  User can enter contact information with a question and you can
                  collect leads.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg  p-2 md:col-span-2 bg-gradient-to-b from-orange-200 to-white shadow-lg">
            <div className="flex h-[180px] md:h-[280px] flex-col justify-between rounded-md p-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 256 260"
                fill="currentColor"
                className="group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                  fill="#545454"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Crawler</h3>
                <p className="text-sm">
                  Crawl the website you want, train the chatbot with the website
                  you crawled.
                </p>
              </div>
              <div className="w-32 absolute right-0 top-0 bottom-0 h-full">
                <Image
                  src={"/card-img-2.svg"}
                  alt="wiki"
                  className="w-full"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid gap-4 md:gap-x-14  justify-center sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-6 mt-6">
          <div className="relative overflow-hidden rounded-lg  p-2 md:col-span-3 bg-gradient-to-b from-green-200 to-white shadow-lg">
            <div className="flex h-180 md:h-[290px] flex-col gap-y-6 rounded-md p-6">
              <Icons.key></Icons.key>
              <div className="space-y-2">
                <h3 className="font-bold">Bring your API key</h3>
                <p className="text-sm relative z-20 md:w-64">
                  No extra charge, you get billed directly by OpenAI.
                </p>
              </div>
              <div className="w-40 absolute  right-0 bottom-0">
                <Image
                  src={"/carg-img.svg"}
                  alt="wiki"
                  className="w-full"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg  p-2 md:col-span-3 bg-gradient-to-b from-teal-200 to-white shadow-lg ">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.folder></Icons.folder>
              <div className="space-y-2">
                <h3 className="font-bold">File Attachments</h3>
                <p className="text-sm">
                  You can attach a file CSV, XML, Images etc... in the chat and
                  the chatbot will analyse it.
                </p>
              </div>
              <div className="w-60 absolute  right-0 bottom-0">
                <Image
                  src={"/building.svg"}
                  alt="wiki"
                  className="w-full"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {/** can add text eher */}
          </p>
        </div>
      </section>

      <section
        data-aos="fade-up"
        id="integrations"
        className="container py-12 md:py-24 lg:py-24"
      >
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Compatible with most popular websites
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Effortlessly integrate with the most popular website platforms.
              </p>
            </div>
            <AnimatedBeamMultipleOutputDemo />
          </div>
        </div>
      </section>

      {/*<section data-aos="fade-up" id="open-source" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {siteConfig.name} is open source and powered by open source software. <br />{" "}
            The code is available on GitHub.
          </p>
        </div>
        <div className="mt-10 mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-left">
          <GithubCard />
        </div>
      </section>*/}
      <section
        data-aos="fade-up"
        id="pricing"
        className="container py-12 md:py-24 lg:py-24 "
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Pick the perfect plan for you
              </h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                All plans include everything that is required to build a
                chatbot.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-4 border rounded-lg">
              <CardHeader className="flex flex-col gap-y-3">
                <CardTitle className="text-xl font-bold">
                  <div className="w-10 h-10 p-2 bg-gray-100  rounded-full shadow-lg">
                    <Icons.user />
                  </div>
                </CardTitle>
                <CardDescription className="flex justify-between items-center text-2xl font-bold">
                  <span>{freePlan.name}</span>
                  <span>${freePlan.price}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Perfect for personal projects, experiments, or simply getting
                  familiar with our powerful tools.
                </p>
                <ul className="space-y-4">
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>{freePlan.maxChatbots} Chatbot</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>{freePlan.maxCrawlers} Crawler</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>{freePlan.maxFiles} Files</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>
                      {freePlan.maxMessagesPerMonth}
                      Messages per Month
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-4 relative bg-orange-600 text-white rounded-lg">
              <Badge className="absolute top-3 right-0 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Popular
              </Badge>
              <CardHeader className="flex flex-col gap-y-3">
                <CardTitle className="text-xl font-bold">
                  <div className="w-10 h-10 p-2 bg-gray-100  rounded-full shadow-lg">
                    <Icons.user color="#000" />
                  </div>
                </CardTitle>
                <CardDescription className="flex justify-between  items-center text-white text-2xl font-bold">
                  <span>{basicPlan.name}</span>
                  <span>${basicPlan.price}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="">
                  For organizations that require collaboration and deploy
                  multiple chatbots.
                </p>
                <ul className="space-y-1">
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>{basicPlan.maxChatbots} Chatbots</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>{basicPlan.maxCrawlers} Crawlers</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>{basicPlan.maxFiles} Files</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>Customizations</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>Unlimited Messages</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>Client Inquiry / Collect Leads</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-4 rounded-lg">
              <CardHeader className="flex flex-col gap-y-3">
                <CardTitle className="text-xl font-bold">
                  <div className="w-10 h-10 p-2 bg-gray-100  rounded-full shadow-lg">
                    <Icons.user />
                  </div>
                </CardTitle>
                <CardDescription className="flex justify-between items-center text-2xl font-bold">
                  <span>{proPlan.name}</span>
                  <span>${proPlan.price}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Tailored solutions for large-scale operations and advanced
                  requirements.
                </p>
                <ul className="space-y-1">
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>{proPlan.maxCrawlers} Crawlers</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>{proPlan.maxChatbots} Chatbots</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>{proPlan.maxFiles} Files</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>Customizations</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>{" "}
                    <span>Unlimited Messages</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>Client Inquiry / Collect Leads</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>Remove &apos;Powered by PlatformAI&apos;</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>{" "}
                    <span>Client File Attachment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-4 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  <div className="w-10 h-10 p-2 bg-gray-100  rounded-full shadow-lg">
                    <Icons.user />
                  </div>
                  ENTERPRISE
                </CardTitle>
                <CardDescription className="text-2xl font-bold">
                  $X
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Custom plan for bigger enterprise. Contact the team for more
                  information.
                </p>
                <ul className="space-y-1">
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>X Chatbots</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>X Crawlers</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>{" "}
                    <span>X Files</span>
                  </li>
                  <li className="flex space-x-3">
                    <span>
                      <Icons.checkCircle />
                    </span>
                    <span>All Features from other plans.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center mt-10 text-center">
            <Link
              href="/dashboard/billing"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Buy our paid plan now quick and easy!
            </Link>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        id="faq"
        className="container space-y-6 py-12 md:py-24 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            FAQ
          </h2>
          <div className="w-full text-left">
            <FAQ />
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        id="faq"
        className="container space-y-6 py-12 md:py-24 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center bg-gray-200 h-[350px] rounded-lg gap-y-7 text-center">
          <h2>Maximize your support capacity without extra hiring</h2>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hover:bg-blue-500 hover:-translate-y-4"
            )}
          >
            <Icons.bot className="h-4 w-4 mr-2"></Icons.bot>
            Try it now for free
          </Link>
        </div>
      </section>
    </>
  );
}
