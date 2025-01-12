import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Icon, List, Section, Button, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdCheckCircle, MdArrowForward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"one-edit"} />
		<Helmet>
			<title>
				IALER
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"IALER"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/AILER-V4.png?v=2024-09-17T14:26:53.714Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21:22:05.277Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Section background="rgba(0, 0, 0, 0) linear-gradient(0deg,#ff9d23 0%,#ebd450 100%) 0% 0% /auto repeat scroll padding-box" padding="24px 0 500px 0">
			<Override slot="SectionContent" padding="0px 0px 60px 0px" background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0, 0, 0, 0.6) 100%) 0% 0% /auto repeat scroll padding-box" />
			<Components.QuarklycommunityKitPopup>
				<Override slot="Overlay" padding="0px 0px 0px 0px" />
				<Override slot="Content" background="#eca312" padding="50px 0px 0px 5px" />
				<Override slot="Button Close" />
				<Section
					padding="10px 0 100px 0"
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
		<Input display="block" placeholder-color="LightGray" background="white" />
		<Section background-color="--dark" text-align="center" padding="32px 0" quarkly-title="Footer-1">
			<Override slot="SectionContent" sm-overflow="hidden" sm-width="100% border-box" />
			<List
				margin="0px 0px 0px 0px"
				padding="12px 0px 12px 0px"
				list-style-type="none"
				as="ul"
				display="flex"
				align-items="center"
				justify-content="center"
				sm-overflow="hidden"
				sm-width="100% border-box"
			>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					About
				</Link>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Services
				</Link>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Portfolio
				</Link>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Blog
				</Link>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Contacts
				</Link>
			</List>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Section padding="80px 0 80px 0" background="--color-darkL1">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 33px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="#ffffff"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Price
				</Text>
				<Text margin="0px 0px 0px 0px" color="--grey" text-align="center" font="--lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							Contact
						</Text>
						<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
							Email us, we would love to hear form you
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" type="search" />
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button>
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Components.QuarklycommunityKitMarquee align-items="center" flex-direction="row-reverse" justify-content="center">
			<Box
				display="grid"
				flex-wrap="wrap"
				width="100%"
				align-items="stretch"
				justify-content="center"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				md-grid-template-columns="1fr"
				justify-items="center"
			>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Monopoly
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						$59
					</Text>
					<Text margin="0px 0px 32px 0px" color="--greyD2" text-align="center" font="--base">
						per month
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						flex="1 1 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					border-width="2px"
					border-style="solid"
					border-color="--color-secondary"
					lg-padding="48px 35px 56px 35px"
					position="relative"
				>
					<Text
						padding="1px 26px 5px 24px"
						color="#04080C"
						background="--color-secondary"
						font="--base"
						position="absolute"
						transform="rotate(90deg)"
						right="-38px"
						left="auto"
						top="70px"
						bottom="auto"
						border-radius="0px 0px 12px 12px"
					>
						Popular
					</Text>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Startup
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						$12
					</Text>
					<Text margin="0px 0px 32px 0px" color="--greyD2" text-align="center" font="--base">
						per month
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						flex="1 1 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Freelance
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						$9
					</Text>
					<Text margin="0px 0px 32px 0px" color="--greyD2" text-align="center" font="--base">
						per month
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						flex="1 1 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
			</Box>
			<Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200" display="block" srcSet="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w" sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
			<Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200" display="block" srcSet="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w" sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
			<Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200" display="block" srcSet="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w" sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
		</Components.QuarklycommunityKitMarquee>
		<Components.QuarklycommunityKitCarousel display="block" autoPlayBehavior="range">
			<Override slot="Slide Image,Slide Image 3" src="https://images.unsplash.com/photo-1736131660777-8b7aa6bb0efe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Slide Image,Slide Image 1" src="https://images.unsplash.com/photo-1736131660777-8b7aa6bb0efe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Slide Image 1" src="https://images.unsplash.com/photo-1736131660777-8b7aa6bb0efe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override
				slot="Slide Image"
				src="https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
				overflow="visible"
				disableOptimization
				pointer-events="none"
			/>
		</Components.QuarklycommunityKitCarousel>
		<Components.QuarklycommunityKitCarousel />
		<Box
			padding="50px 55px 50px 55px"
			sm-padding="55px 40px 50px 55px"
			border-width="1px"
			border-style="solid"
			border-radius="24px"
			border-color="--color-lightD2"
			display="flex"
			flex-direction="column"
			align-items="flex-start"
		>
			<Text
				margin="0px 0px 35px 0px"
				color="--dark"
				font="--lead"
				lg-margin="0px 0px 50px 0px"
				sm-margin="0px 0px 30px 0px"
				flex="1 0 auto"
			>
				“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
			</Text>
			<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
				<Image
					width="43px"
					height="43px"
					src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
					border-radius="50зч"
					margin="0px 15px 12px 0px"
					srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box>
					<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
						Mason Johnson
					</Text>
					<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
						Manager
					</Text>
				</Box>
			</Box>
		</Box>
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