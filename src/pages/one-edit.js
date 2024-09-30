import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Icon, List, Section, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { MdCheckCircle, MdArrowForward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"one-edit"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Section background="rgba(0, 0, 0, 0) linear-gradient(0deg,#ff9d23 0%,#ebd450 100%) 0% 0% /auto repeat scroll padding-box" padding="24px 0 500px 0">
			<Override slot="SectionContent" padding="0px 0px 60px 0px" background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0, 0, 0, 0.6) 100%) 0% 0% /auto repeat scroll padding-box" />
			<Components.QuarklycommunityKitPopup>
				<Override slot="Overlay" padding="0px 0px 0px 0px" />
				<Override slot="Content" background="#eca312" padding="40 0px 0px 5px" />
				<Section
					padding="100px 0"
					sm-padding="40px 0"
					sm-min-height="auto"
					display="flex"
					background="rgba(0, 0, 0, 0) radial-gradient(circle at center,#021946 0%,#000000 100%) 0% 0% /auto repeat scroll padding-box"
					quarkly-title="Advantages/Features-30"
				>
					<Override
						slot="SectionContent"
						flex-direction="row"
						flex-wrap="wrap"
						grid-gap="5%"
						padding="60px 40px"
						sm-padding="30px 30px 60px 30px"
						background="rgba(255, 255, 255, 0.06) radial-gradient(circle at center,rgba(255, 255, 255, 0.01) 0%,rgba(255, 255, 255, 0.02) 100%)"
						border-radius="30px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.03)"
					/>
					<Box
						display="flex"
						flex="0 0 40%"
						lg-flex="1 1 100%"
						justify-content="flex-end"
						overflow-y="hidden"
						overflow-x="hidden"
						lg-width="100%"
						align-items="center"
						lg-justify-content="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							height="23em"
							width="23em"
							min-height="260px"
							lg-width="auto"
							lg-height="auto"
							object-fit="cover"
							src="https://images.unsplash.com/photo-1508011868393-d6513e812e5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
							display="block"
							border-radius="20px"
							srcSet="https://images.unsplash.com/photo-1508011868393-d6513e812e5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1508011868393-d6513e812e5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1508011868393-d6513e812e5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1508011868393-d6513e812e5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1508011868393-d6513e812e5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1508011868393-d6513e812e5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1508011868393-d6513e812e5c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						display="flex"
						flex="1 1 55%"
						flex-direction="column"
						justify-content="flex-start"
						lg-width="100%"
						lg-align-items="flex-start"
						lg-margin="0"
						padding="30px 0px 0 0"
						lg-flex-direction="row"
						lg-flex-wrap="wrap"
					>
						<Text
							as="h1"
							margin="0px"
							font="normal 600 2.3em/1.5 --fontFamily-sans"
							color="--light"
							width="100%"
							md-width="100%"
							md-margin="0px 0px 26px 0px"
							md-padding="0px 0px 0px 0px"
							sm-font="normal 600 30px/1.2 --fontFamily-sans"
						>
							Join our team
						</Text>
						<Text
							as="p"
							margin="1.2em 0 0 0"
							font="normal 100 20px/1.5 --fontFamily-sans"
							font-size="1.2em"
							font-weight="300"
							color="--light"
							width="100%"
							md-width="100%"
							md-margin="0px 0px 0px 0px"
							md-padding="0px 0px 0px 0px"
							lg-max-width="640px"
						>
							Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</Text>
						<Box
							display="flex"
							flex-direction="row"
							grid-gap="18px"
							margin="30px 0px 0px 0px"
							font="400 1.1em --fontFamily-sans"
							lg-width="100%"
							lg-justify-content="flex-start"
							flex-wrap="wrap"
							color="--light"
							sm-margin="24px 0 0 0"
							lg-margin="32px 0px 0px 0px"
						>
							<List
								as="ul"
								padding="0"
								margin="0"
								list-style-type="none"
								display="flex"
								flex-direction="column"
								grid-gap="18px"
								lg-max-width="640px"
							>
								<Box margin="0px 0px 0px 0px" display="flex" grid-gap="10px">
									<Icon display="block" category="md" icon={MdCheckCircle} size="20px" />
									<Text padding="0" margin="0">
										Competitive salaries.
									</Text>
								</Box>
								<Box margin="0px 0px 0px 0px" display="flex" grid-gap="10px">
									<Icon display="block" category="md" icon={MdCheckCircle} size="20px" />
									<Text padding="0" margin="0">
										30 days of paid vacation
									</Text>
								</Box>
								<Box margin="0px 0px 0px 0px" display="flex" grid-gap="10px">
									<Icon display="block" category="md" icon={MdCheckCircle} size="20px" />
									<Text padding="0" margin="0">
										Benefits for you and your family
									</Text>
								</Box>
							</List>
							<List
								as="ul"
								padding="0"
								margin="0"
								list-style-type="none"
								display="flex"
								flex-direction="column"
								grid-gap="18px"
								lg-max-width="640px"
							>
								<Box margin="0px 0px 0px 0px" display="flex" grid-gap="10px">
									<Icon display="block" category="md" icon={MdCheckCircle} size="20px" />
									<Text padding="0" margin="0">
										Flexible work hours
									</Text>
								</Box>
								<Box margin="0px 0px 0px 0px" display="flex" grid-gap="10px">
									<Icon display="block" category="md" icon={MdCheckCircle} size="20px" />
									<Text padding="0" margin="0">
										Annual team retreats
									</Text>
								</Box>
								<Box margin="0px 0px 0px 0px" display="flex" grid-gap="10px">
									<Icon display="block" category="md" icon={MdCheckCircle} size="20px" />
									<Text padding="0" margin="0">
										A great work environment
									</Text>
								</Box>
							</List>
						</Box>
						<Link
							href="#"
							color="#909dfd"
							margin="2em 0 0 0"
							font="500 1.1em --fontFamily-sans"
							text-decoration-line="initial"
							display="flex"
							grid-gap="4px"
							transition="all 0.3s ease"
							padding="0"
							justify-content="flex-start"
							flex="0 0 auto"
							order="0"
							align-self="flex-start"
							overflow-x="hidden"
							overflow-y="hidden"
							lg-margin="2em 0 0 0"
							align-items="flex-start"
							hover-border-bottom="1px solid #909dfd"
						>
							See our job postings
							<Icon category="md" icon={MdArrowForward} size="1.1em" />
						</Link>
					</Box>
				</Section>
				<Image
					src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17:11:09.041Z"
					display="block"
					quarkly-title="Carga"
					overflow="visible"
					height="127px"
					srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Button text-align="center" type="link">
					Button
				</Button>
			</Components.QuarklycommunityKitPopup>
		</Section>
		<Section
			padding="100px 0"
			sm-padding="40px 0"
			sm-min-height="auto"
			display="flex"
			background="rgba(0, 0, 0, 0) radial-gradient(circle at center,#021946 0%,#000000 100%) 0% 0% /auto repeat scroll padding-box"
			quarkly-title="Advantages/Features-30"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				padding="60px 40px"
				sm-padding="30px 30px 60px 30px"
				background="rgba(255, 255, 255, 0.06) radial-gradient(circle at center,rgba(255, 255, 255, 0.01) 0%,rgba(255, 255, 255, 0.02) 100%)"
				border-radius="30px"
				border-width="1px"
				border-style="solid"
				border-color="rgba(255, 255, 255, 0.03)"
			/>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="--lead" margin="20px">
				Button
			</Button>
		</Section>
		<Components.QuarklycommunityKitMenu />
		<Components.QuarklycommunityKitCollapse />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});