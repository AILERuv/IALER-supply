import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Section, Image, Box, Icon, LinkBox, Hr, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { GiChickenOven, GiCandyCanes, GiBerriesBowl } from "react-icons/gi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"tienda"} />
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
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				MUY PRONTO
			</Text>
			<Button font="--lead" margin="20px" type="link" target="_blank">
				Button
			</Button>
		</Section>
		<Section background="#111828" padding="90px 0 120px 0" quarkly-title="Team-5">
			<Text margin="0px 0px 0px 0px" color="--light" text-align="left" font="600 48px --fontFamily-sans">
				Our team
			</Text>
			<Text
				margin="25px 600px 0px 0px"
				text-align="left"
				color="#b2bdc6"
				font="300 22px/150% --fontFamily-sansHelvetica"
				lg-margin="25px 0 0px 0px"
			>
				We are united by our passion for innovation and our commitment to delivering high-quality solutions to our clients.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				margin="70px 0px 0px 0px"
				grid-template-columns="repeat(4, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="40px 35px"
				md-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-rows="repeat(4, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-template-rows="auto"
			>
				<Box min-width="100px" min-height="100px" display="flex" flex-direction="column">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20:54:40.886Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Leslie Alexander
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Co-Founder / CEO
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21:06:45.941Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Michael Foster
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Co-Founder / CO
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Glasgow, Scotland
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21:06:57.036Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Dries Vincent
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Business Relations
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Niagara Falls, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21:07:08.834Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Lindsay Walton
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Front-end Developer
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						London, England
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21:11:29.178Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Courtney Henry
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Designer
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21:11:40.598Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Tom Cook
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Director of Product
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21:12:01.188Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Whitney Francis
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Copywriter
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21:12:16.116Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Leonard Krasner
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Senior Designer
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="#ffffff" padding="90px 0 110px 0" quarkly-title="Team-9">
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				grid-template-columns="repeat(2, 1fr)"
				lg-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="0px 80px 0px 0px"
					width="30%"
					lg-padding="0px 50px 0px 0px"
					lg-width="100%"
					lg-margin="0px 0px 50px 0px"
					sm-margin="0px 0px 35px 0px"
					color="--greyD2"
					sm-padding="0px 0 0px 0px"
				>
					<Text margin="0px 0px 0px 0px" color="--dark" font="600 48px --fontFamily-sans">
						Our team
					</Text>
					<Text color="--greyD2" font="300 20px/140% --fontFamily-sansHelvetica">
						We are united by our passion for innovation and our commitment to delivering high-quality solutions to our clients.{" "}
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="70%"
					display="grid"
					flex-direction="column"
					lg-width="100%"
					grid-template-columns="repeat(2, 1fr)"
					grid-template-rows="repeat(2, 1fr)"
					grid-gap="36px 24px"
					sm-grid-template-columns="1fr"
					sm-grid-template-rows="auto"
					sm-grid-gap="36px 0"
				>
					<Box
						min-width="100px"
						min-height="100px"
						justify-self="center"
						sm-display="flex"
						sm-flex-direction="column"
						sm-align-items="center"
						display="flex"
						flex-direction="column"
					>
						<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18:03:35.040Z"
								display="block"
								width="100%"
								border-radius="25px"
								lg-max-width="100%"
								height="250px"
								max-width="100%"
								object-fit="cover"
								max-height="100%"
								md-height="250px"
								md-width="auto"
								sm-width="100%"
								sm-height="auto"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18%3A03%3A35.040Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18%3A03%3A35.040Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18%3A03%3A35.040Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18%3A03%3A35.040Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18%3A03%3A35.040Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18%3A03%3A35.040Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18%3A03%3A35.040Z&quality=85&w=3200 3200w"
								sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							flex-direction="column"
							justify-content="center"
							sm-width="100%"
							sm-padding="0px 0px 0px 0"
							margin="25px 0px 0px 0px"
						>
							<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
								Michael Foster
							</Text>
							<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
								Co-Founder / CO
							</Text>
							<Text margin="22px 0px 0px 0px" font="300 18px/140% --fontFamily-sansHelvetica" color="--darkL2" sm-margin="18px 0px 0px 0px">
								Our co-founder is a visionary leader who brings extensive experience in entrepreneurship and business development.{"  "}
							</Text>
							<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
								<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
									<Icon
										category="fa"
										icon={FaTwitter}
										size="25px"
										color="--greyD2"
										hover-color="--darkL1"
									/>
								</LinkBox>
								<LinkBox href="linkedin.com">
									<Icon
										category="fa"
										icon={FaLinkedin}
										size="25px"
										color="--greyD2"
										hover-color="--darkL1"
									/>
								</LinkBox>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						justify-self="center"
						sm-display="flex"
						sm-flex-direction="column"
						sm-align-items="center"
						display="flex"
						flex-direction="column"
					>
						<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18:06:34.340Z"
								display="block"
								width="100%"
								border-radius="25px"
								lg-max-width="100%"
								max-width="100%"
								object-fit="cover"
								max-height="100%"
								md-height="250px"
								md-width="auto"
								sm-width="100%"
								sm-height="auto"
								height="250px"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18%3A06%3A34.340Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18%3A06%3A34.340Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18%3A06%3A34.340Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18%3A06%3A34.340Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18%3A06%3A34.340Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18%3A06%3A34.340Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18%3A06%3A34.340Z&quality=85&w=3200 3200w"
								sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							flex-direction="column"
							justify-content="center"
							sm-width="100%"
							sm-padding="0px 0px 0px 0"
							margin="25px 0px 0px 0px"
						>
							<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
								Emma Dorsey
							</Text>
							<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
								Sales Manager
							</Text>
							<Text margin="22px 0px 0px 0px" font="300 18px/140% --fontFamily-sansHelvetica" color="--darkL2" sm-margin="18px 0px 0px 0px">
								Our sales manager is a results-driven professional who is responsible for driving revenue growth through effective sales strategies and tactics.{"   "}
							</Text>
							<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
								<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
									<Icon
										category="fa"
										icon={FaTwitter}
										size="25px"
										color="--greyD2"
										hover-color="--darkL1"
									/>
								</LinkBox>
								<LinkBox href="linkedin.com">
									<Icon
										category="fa"
										icon={FaLinkedin}
										size="25px"
										color="--greyD2"
										hover-color="--darkL1"
									/>
								</LinkBox>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						justify-self="center"
						sm-display="flex"
						sm-flex-direction="column"
						sm-align-items="center"
						display="flex"
						flex-direction="column"
					>
						<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18:07:43.011Z"
								display="block"
								width="100%"
								border-radius="25px"
								lg-max-width="100%"
								max-width="100%"
								object-fit="cover"
								max-height="100%"
								md-height="250px"
								md-width="auto"
								sm-width="100%"
								sm-height="auto"
								height="250px"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18%3A07%3A43.011Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18%3A07%3A43.011Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18%3A07%3A43.011Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18%3A07%3A43.011Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18%3A07%3A43.011Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18%3A07%3A43.011Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18%3A07%3A43.011Z&quality=85&w=3200 3200w"
								sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							flex-direction="column"
							justify-content="center"
							sm-width="100%"
							sm-padding="0px 0px 0px 0"
							margin="25px 0px 0px 0px"
						>
							<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
								Alicia Bell
							</Text>
							<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
								Marketing manager
							</Text>
							<Text margin="22px 0px 0px 0px" font="300 18px/140% --fontFamily-sansHelvetica" color="--darkL2" sm-margin="18px 0px 0px 0px">
								Our marketing manager is a creative thinker who is responsible for developing and implementing marketing strategies that drive brand awareness and customer acquisition.{"  "}
							</Text>
							<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
								<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
									<Icon
										category="fa"
										icon={FaTwitter}
										size="25px"
										color="--greyD2"
										hover-color="--darkL1"
									/>
								</LinkBox>
								<LinkBox href="linkedin.com">
									<Icon
										category="fa"
										icon={FaLinkedin}
										size="25px"
										color="--greyD2"
										hover-color="--darkL1"
									/>
								</LinkBox>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						justify-self="center"
						sm-display="flex"
						sm-flex-direction="column"
						sm-align-items="center"
						display="flex"
						flex-direction="column"
					>
						<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18:08:27.505Z"
								display="block"
								width="100%"
								border-radius="25px"
								lg-max-width="100%"
								max-width="100%"
								object-fit="cover"
								max-height="100%"
								md-height="250px"
								md-width="auto"
								sm-width="100%"
								sm-height="auto"
								height="250px"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18%3A08%3A27.505Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18%3A08%3A27.505Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18%3A08%3A27.505Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18%3A08%3A27.505Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18%3A08%3A27.505Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18%3A08%3A27.505Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18%3A08%3A27.505Z&quality=85&w=3200 3200w"
								sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							flex-direction="column"
							justify-content="center"
							sm-width="100%"
							sm-padding="0px 0px 0px 0"
							margin="25px 0px 0px 0px"
						>
							<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
								Michael Foster
							</Text>
							<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
								Project manager
							</Text>
							<Text margin="22px 0px 0px 0px" font="300 18px/140% --fontFamily-sansHelvetica" color="--darkL2" sm-margin="18px 0px 0px 0px">
								Our project manager is a detail-oriented professional who is responsible for ensuring that our projects are delivered on time, within budget, and to the satisfaction of our clients.{"   "}
							</Text>
							<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
								<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
									<Icon
										category="fa"
										icon={FaTwitter}
										size="25px"
										color="--greyD2"
										hover-color="--darkL1"
									/>
								</LinkBox>
								<LinkBox href="linkedin.com">
									<Icon
										category="fa"
										icon={FaLinkedin}
										size="25px"
										color="--greyD2"
										hover-color="--darkL1"
									/>
								</LinkBox>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="90px 0 120px 0" background="#0B0008" quarkly-title="Team-15">
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="46px 24px"
				md-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-rows="auto"
				sm-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="0px 50px 0px 0px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="center"
					sm-padding="0px 0 0px 0px"
					sm-margin="0px 0px 15px 0px"
				>
					<Text margin="0px 0px 25px 0px" color="--orange" font="normal 300 20px/1.2 --fontFamily-mono">
						Biggest Stars
					</Text>
					<Text margin="0px 0px 30px 0px" color="--light" font="normal 900 48px/1.2 --fontFamily-sans">
						AMAZING LINE-UP 2023
					</Text>
					<Text margin="0px 0px 40px 0px" color="--lightD2" font="300 18px/140% --fontFamily-sansHelvetica">
						Multiple stages with different performers and genres of music, as well as food vendors, merchandise booths, and other activities.{"  "}
					</Text>
					<Button background="--color-orange" padding="15px 44px 15px 44px" font="normal 400 14px/1.5 --fontFamily-sansHelvetica">
						VIEW FULL LINE-UP &gt;&gt;
					</Button>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-handsome-man-with-long-blonde-hair-red-jacket-2.jpg?v=2023-04-19T00:10:07.996Z"
						display="block"
						width="100%"
						height="420px"
						object-fit="cover"
						object-position="50% 0"
						margin="0px 0px 30px 0px"
						sm-height="350px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-handsome-man-with-long-blonde-hair-red-jacket-2.jpg?v=2023-04-19T00%3A10%3A07.996Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-handsome-man-with-long-blonde-hair-red-jacket-2.jpg?v=2023-04-19T00%3A10%3A07.996Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-handsome-man-with-long-blonde-hair-red-jacket-2.jpg?v=2023-04-19T00%3A10%3A07.996Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-handsome-man-with-long-blonde-hair-red-jacket-2.jpg?v=2023-04-19T00%3A10%3A07.996Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-handsome-man-with-long-blonde-hair-red-jacket-2.jpg?v=2023-04-19T00%3A10%3A07.996Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-handsome-man-with-long-blonde-hair-red-jacket-2.jpg?v=2023-04-19T00%3A10%3A07.996Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-handsome-man-with-long-blonde-hair-red-jacket-2.jpg?v=2023-04-19T00%3A10%3A07.996Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" color="--light" font="normal 400 22px/1.2 --fontFamily-sans">
						LARA MENDEL
					</Text>
					<Text margin="0px 0px 0px 0px" color="--grey">
						Fusion Stag
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-fashion-neon-light-portrait-night-life-attractive-confident-male-stylish-outfit-trendy.jpg?v=2023-04-19T00:15:20.558Z"
						display="block"
						width="100%"
						height="420px"
						object-fit="cover"
						object-position="50% 0"
						margin="0px 0px 30px 0px"
						sm-height="350px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-fashion-neon-light-portrait-night-life-attractive-confident-male-stylish-outfit-trendy.jpg?v=2023-04-19T00%3A15%3A20.558Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-fashion-neon-light-portrait-night-life-attractive-confident-male-stylish-outfit-trendy.jpg?v=2023-04-19T00%3A15%3A20.558Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-fashion-neon-light-portrait-night-life-attractive-confident-male-stylish-outfit-trendy.jpg?v=2023-04-19T00%3A15%3A20.558Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-fashion-neon-light-portrait-night-life-attractive-confident-male-stylish-outfit-trendy.jpg?v=2023-04-19T00%3A15%3A20.558Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-fashion-neon-light-portrait-night-life-attractive-confident-male-stylish-outfit-trendy.jpg?v=2023-04-19T00%3A15%3A20.558Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-fashion-neon-light-portrait-night-life-attractive-confident-male-stylish-outfit-trendy.jpg?v=2023-04-19T00%3A15%3A20.558Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-fashion-neon-light-portrait-night-life-attractive-confident-male-stylish-outfit-trendy.jpg?v=2023-04-19T00%3A15%3A20.558Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" color="--light" font="normal 400 22px/1.2 --fontFamily-sans">
						DUSTIN HANSEN
					</Text>
					<Text margin="0px 0px 0px 0px" color="--grey">
						Vibra Stage
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-young-man-posing-listening-music-headphones-isolated-gradient-red-orange-background-neon-light.jpg?v=2023-04-19T00:14:56.678Z"
						display="block"
						width="100%"
						height="420px"
						object-fit="cover"
						object-position="50% 0"
						margin="0px 0px 30px 0px"
						sm-height="350px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-young-man-posing-listening-music-headphones-isolated-gradient-red-orange-background-neon-light.jpg?v=2023-04-19T00%3A14%3A56.678Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-young-man-posing-listening-music-headphones-isolated-gradient-red-orange-background-neon-light.jpg?v=2023-04-19T00%3A14%3A56.678Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-young-man-posing-listening-music-headphones-isolated-gradient-red-orange-background-neon-light.jpg?v=2023-04-19T00%3A14%3A56.678Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-young-man-posing-listening-music-headphones-isolated-gradient-red-orange-background-neon-light.jpg?v=2023-04-19T00%3A14%3A56.678Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-young-man-posing-listening-music-headphones-isolated-gradient-red-orange-background-neon-light.jpg?v=2023-04-19T00%3A14%3A56.678Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-young-man-posing-listening-music-headphones-isolated-gradient-red-orange-background-neon-light.jpg?v=2023-04-19T00%3A14%3A56.678Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-young-man-posing-listening-music-headphones-isolated-gradient-red-orange-background-neon-light.jpg?v=2023-04-19T00%3A14%3A56.678Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" color="--light" font="normal 400 22px/1.2 --fontFamily-sans">
						GILBERT WALLACE
					</Text>
					<Text margin="0px 0px 0px 0px" color="--grey">
						Fusion Stag
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-man-with-kaleidoscope-effect.jpg?v=2023-04-19T00:20:40.805Z"
						display="block"
						width="100%"
						height="420px"
						object-fit="cover"
						object-position="50% 0"
						margin="0px 0px 30px 0px"
						sm-height="350px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-man-with-kaleidoscope-effect.jpg?v=2023-04-19T00%3A20%3A40.805Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-man-with-kaleidoscope-effect.jpg?v=2023-04-19T00%3A20%3A40.805Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-man-with-kaleidoscope-effect.jpg?v=2023-04-19T00%3A20%3A40.805Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-man-with-kaleidoscope-effect.jpg?v=2023-04-19T00%3A20%3A40.805Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-man-with-kaleidoscope-effect.jpg?v=2023-04-19T00%3A20%3A40.805Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-man-with-kaleidoscope-effect.jpg?v=2023-04-19T00%3A20%3A40.805Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-man-with-kaleidoscope-effect.jpg?v=2023-04-19T00%3A20%3A40.805Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" color="--light" font="normal 400 22px/1.2 --fontFamily-sans">
						ATIFF
					</Text>
					<Text margin="0px 0px 0px 0px" color="--grey">
						Edge Stage
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/music-caucasian-woman-s-portrait-pink-studio-background-trendy-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-sales-ad-fashion.jpg?v=2023-04-19T00:18:52.317Z"
						display="block"
						width="100%"
						height="420px"
						object-fit="cover"
						object-position="50% 0"
						margin="0px 0px 30px 0px"
						sm-height="350px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/music-caucasian-woman-s-portrait-pink-studio-background-trendy-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-sales-ad-fashion.jpg?v=2023-04-19T00%3A18%3A52.317Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/music-caucasian-woman-s-portrait-pink-studio-background-trendy-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-sales-ad-fashion.jpg?v=2023-04-19T00%3A18%3A52.317Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/music-caucasian-woman-s-portrait-pink-studio-background-trendy-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-sales-ad-fashion.jpg?v=2023-04-19T00%3A18%3A52.317Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/music-caucasian-woman-s-portrait-pink-studio-background-trendy-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-sales-ad-fashion.jpg?v=2023-04-19T00%3A18%3A52.317Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/music-caucasian-woman-s-portrait-pink-studio-background-trendy-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-sales-ad-fashion.jpg?v=2023-04-19T00%3A18%3A52.317Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/music-caucasian-woman-s-portrait-pink-studio-background-trendy-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-sales-ad-fashion.jpg?v=2023-04-19T00%3A18%3A52.317Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/music-caucasian-woman-s-portrait-pink-studio-background-trendy-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-sales-ad-fashion.jpg?v=2023-04-19T00%3A18%3A52.317Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" color="--light" font="normal 400 22px/1.2 --fontFamily-sans">
						KENDAL LUIS
					</Text>
					<Text margin="0px 0px 0px 0px" color="--grey">
						Vibra Stage
					</Text>
				</Box>
			</Box>
		</Section>
		<Section md-padding="70px 0 80px 0" quarkly-title="Product-2">
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				grid-template-rows="auto"
				md-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/unique-handdrawn-floral-modern-shapes.png?v=2023-04-27T21:48:23.623Z) 0 0/contain no-repeat scroll padding-box"
					padding="100px 50px 100px 50px"
					md-margin="0px 0px 50px 0px"
					md-padding="50px 50px 50px 50px"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/Ghost-Boys_newcover_noshadow.png?v=2023-04-27T21:25:53.997Z"
						display="block"
						max-width="100%"
						width="350px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/Ghost-Boys_newcover_noshadow.png?v=2023-04-27T21%3A25%3A53.997Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/Ghost-Boys_newcover_noshadow.png?v=2023-04-27T21%3A25%3A53.997Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/Ghost-Boys_newcover_noshadow.png?v=2023-04-27T21%3A25%3A53.997Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/Ghost-Boys_newcover_noshadow.png?v=2023-04-27T21%3A25%3A53.997Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/Ghost-Boys_newcover_noshadow.png?v=2023-04-27T21%3A25%3A53.997Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/Ghost-Boys_newcover_noshadow.png?v=2023-04-27T21%3A25%3A53.997Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/Ghost-Boys_newcover_noshadow.png?v=2023-04-27T21%3A25%3A53.997Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="center"
					padding="0px 40px 0px 40px"
					lg-padding="0px 0 0px 0"
				>
					<Text margin="0px 0px 40px 0px" font="normal 500 42px/1.2 --fontFamily-serifGaramond" sm-margin="0px 0px 30px 0px">
						Order Online
					</Text>
					<Text margin="0px 0px 50px 0px" font="normal 300 20px/1.5 --fontFamily-sans" color="#656b70">
						Our ebooks are carefully curated by our team of experts, ensuring that you have access to high-quality and engaging reads. We also offer recommendations based on your reading history, so you can discover new authors and genres that you'll love.{" "}
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						lg-align-self="center"
						md-align-self="auto"
						sm-flex-direction="column"
						sm-align-items="center"
						sm-align-self="center"
					>
						<Button
							background="#f48771"
							margin="0px 5px 0px 0px"
							href="mailto:name@site.com"
							padding="8px 30px 8px 30px"
							sm-margin="0 0 8px 0"
						>
							Order
						</Button>
						<LinkBox margin="0px 5px 0px 0px" sm-margin="0px 0 0px 0px">
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/pngfind.com-amazon-button-png-5958434-2.png?v=2023-04-27T21:52:35.145Z"
								display="block"
								height="50px"
								sm-margin="0 0 8px 0"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pngfind.com-amazon-button-png-5958434-2.png?v=2023-04-27T21%3A52%3A35.145Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pngfind.com-amazon-button-png-5958434-2.png?v=2023-04-27T21%3A52%3A35.145Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pngfind.com-amazon-button-png-5958434-2.png?v=2023-04-27T21%3A52%3A35.145Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pngfind.com-amazon-button-png-5958434-2.png?v=2023-04-27T21%3A52%3A35.145Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pngfind.com-amazon-button-png-5958434-2.png?v=2023-04-27T21%3A52%3A35.145Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pngfind.com-amazon-button-png-5958434-2.png?v=2023-04-27T21%3A52%3A35.145Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pngfind.com-amazon-button-png-5958434-2.png?v=2023-04-27T21%3A52%3A35.145Z&quality=85&w=3200 3200w"
								sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</LinkBox>
						<LinkBox>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/barnes-and-noble-buy-button%20%281%29.png.webp?v=2023-04-27T21:53:51.017Z"
								display="block"
								height="50px"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/barnes-and-noble-buy-button%20%281%29.png.webp?v=2023-04-27T21%3A53%3A51.017Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/barnes-and-noble-buy-button%20%281%29.png.webp?v=2023-04-27T21%3A53%3A51.017Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/barnes-and-noble-buy-button%20%281%29.png.webp?v=2023-04-27T21%3A53%3A51.017Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/barnes-and-noble-buy-button%20%281%29.png.webp?v=2023-04-27T21%3A53%3A51.017Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/barnes-and-noble-buy-button%20%281%29.png.webp?v=2023-04-27T21%3A53%3A51.017Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/barnes-and-noble-buy-button%20%281%29.png.webp?v=2023-04-27T21%3A53%3A51.017Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/barnes-and-noble-buy-button%20%281%29.png.webp?v=2023-04-27T21%3A53%3A51.017Z&quality=85&w=3200 3200w"
								sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</LinkBox>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 90px 0" quarkly-title="Product-6">
			<Override slot="SectionContent" lg-align-items="center" />
			<Text
				margin="0px 0px 20px 0px"
				font="normal 500 56px/1.2 --fontFamily-sans"
				text-align="center"
				lg-width="70%"
				md-width="100%"
				color="--darkL1"
			>
				Our delicacies
			</Text>
			<Text
				margin="0px 0px 20px 0px"
				text-align="center"
				font="normal 400 22px/1.5 --fontFamily-sansHelvetica"
				color="--darkL1"
				padding="0px 280px 0px 280px"
				lg-padding="0px 0 0px 0"
				lg-margin="0px 0px 50px 0px"
			>
				WE OFFER A WIDE VARIETY OF PRODUCTS
			</Text>
			<Hr
				min-height="10px"
				margin="0px 0px 50px 0px"
				border-color="--color-darkL1"
				width="40px"
				border-width="2px 0 0 0"
				align-self="center"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="0px 0px 30px 0px"
				grid-template-columns="repeat(2, 1fr)"
				md-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="32.5%"
					lg-width="35%"
					background="#ffdd61"
					border-radius="4px"
					md-width="100%"
					md-margin="0px 0px 35px 0px"
					display="flex"
					flex-direction="column"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10:47:09.601Z"
						display="block"
						max-width="100%"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						lg-height="200px"
						md-height="350px"
						border-radius="4px 4px 0 0"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 30px 30px 30px"
						background="#ffdd61"
						border-color="--color-darkL1"
						border-radius="0 0 4px 4px"
						lg-padding="20px 20px 20px 20px"
						display="flex"
						flex-direction="column"
						flex="1 1 0%"
					>
						<Text margin="0px 0px 15px 0px" font="normal 600 20px/1.2 --fontFamily-sans">
							Garlic and herb linguine
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-serifGaramond" lg-margin="0px 0px 18px 0px" flex="1 1 0%">
							This dish features al dente linguine pasta tossed in a flavorful blend of garlic, herbs, and Parmesan cheese.
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							justify-content="space-between"
							align-items="center"
						>
							<Button background="--color-darkL1" border-radius="4px" href="/">
								Read more
							</Button>
							<Text margin="0px 0px 0px 0px" font="normal 600 20px/1.5 --fontFamily-serifGaramond">
								18 $
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="70%"
					display="flex"
					align-items="center"
					flex-direction="column"
					justify-content="center"
					padding="0px 80px 0px 80px"
					lg-width="65%"
					md-width="100%"
					md-margin="0px 0px 15px 0px"
					md-padding="0px 0 0px 0"
					lg-padding="0px 40px 0px 40px"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/tray.png?v=2023-04-28T11:18:00.724Z"
						display="block"
						width="80px"
						height="80px"
						margin="0px 0px 25px 0px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tray.png?v=2023-04-28T11%3A18%3A00.724Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tray.png?v=2023-04-28T11%3A18%3A00.724Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tray.png?v=2023-04-28T11%3A18%3A00.724Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tray.png?v=2023-04-28T11%3A18%3A00.724Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tray.png?v=2023-04-28T11%3A18%3A00.724Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tray.png?v=2023-04-28T11%3A18%3A00.724Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/tray.png?v=2023-04-28T11%3A18%3A00.724Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 20px 0px" font="normal 500 16px/1.5 --fontFamily-sans" text-align="center">
						GARLIC AND HERB LINGUINE WITH PARMESAN CHEESE
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 22px/1.5 --fontFamily-serifGaramond" text-align="center">
						This dish features al dente linguine pasta tossed in a flavorful blend of garlic, herbs, and Parmesan cheese. The garlic and herb seasoning adds a delicious depth of flavor to the dish, while the Parmesan cheese adds a creamy and tangy finish.
					</Text>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				md-grid-template-columns="1fr"
				md-grid-gap="40px 0"
				md-margin="0px 0px 50px 0px"
				grid-gap="0 35px"
				lg-grid-gap="16px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					background="#d9e9fa"
					border-radius="4px"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10:47:09.601Z"
						display="block"
						max-width="100%"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						lg-height="200px"
						md-height="350px"
						border-radius="4px 4px 0 0"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/potato-fritters-served-with-sour-cream.jpg?v=2023-04-28T10%3A47%3A09.601Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 30px 30px 30px"
						border-color="--color-darkL1"
						border-radius="0 0 4px 4px"
						display="flex"
						flex-direction="column"
						lg-padding="20px 20px 20px 20px"
						flex="1 1 0%"
					>
						<Text margin="0px 0px 15px 0px" font="normal 600 20px/1.2 --fontFamily-sans">
							Steak and stout stew
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-serifGaramond" lg-margin="0px 0px 18px 0px" flex="1 1 0%">
							This dish features al dente linguine pasta tossed in a flavorful blend of garlic, herbs, and Parmesan cheese.
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							justify-content="space-between"
							align-items="center"
						>
							<Button background="--color-darkL1" border-radius="4px" href="/">
								Read more
							</Button>
							<Text margin="0px 0px 0px 0px" font="normal 600 20px/1.5 --fontFamily-serifGaramond">
								13 $
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					background="#d9e9fa"
					border-radius="4px"
					display="flex"
					flex-direction="column"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/pasta-spaghetti-with-tomato-sauce-black-bowl-top-view.jpg?v=2023-04-28T10:46:59.340Z"
						display="block"
						max-width="100%"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						lg-height="200px"
						md-height="350px"
						border-radius="4px 4px 0 0"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pasta-spaghetti-with-tomato-sauce-black-bowl-top-view.jpg?v=2023-04-28T10%3A46%3A59.340Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pasta-spaghetti-with-tomato-sauce-black-bowl-top-view.jpg?v=2023-04-28T10%3A46%3A59.340Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pasta-spaghetti-with-tomato-sauce-black-bowl-top-view.jpg?v=2023-04-28T10%3A46%3A59.340Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pasta-spaghetti-with-tomato-sauce-black-bowl-top-view.jpg?v=2023-04-28T10%3A46%3A59.340Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pasta-spaghetti-with-tomato-sauce-black-bowl-top-view.jpg?v=2023-04-28T10%3A46%3A59.340Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pasta-spaghetti-with-tomato-sauce-black-bowl-top-view.jpg?v=2023-04-28T10%3A46%3A59.340Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/pasta-spaghetti-with-tomato-sauce-black-bowl-top-view.jpg?v=2023-04-28T10%3A46%3A59.340Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 30px 30px 30px"
						border-color="--color-darkL1"
						border-radius="0 0 4px 4px"
						lg-padding="20px 20px 20px 20px"
						flex="1 1 0%"
						display="flex"
						flex-direction="column"
					>
						<Text margin="0px 0px 15px 0px" font="normal 600 20px/1.2 --fontFamily-sans">
							Classic Pasta Dish
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-serifGaramond" lg-margin="0px 0px 18px 0px" flex="1 1 0%">
							The garlic and herb seasoning adds a delicious depth of flavor to the dish, while the Parmesan cheese adds a creamy and tangy finish.
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							justify-content="space-between"
							align-items="center"
						>
							<Button background="--color-darkL1" border-radius="4px" href="/">
								Read more
							</Button>
							<Text margin="0px 0px 0px 0px" font="normal 600 20px/1.5 --fontFamily-serifGaramond">
								25 $
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					background="#d9e9fa"
					border-radius="4px"
					display="flex"
					flex-direction="column"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/fried-chicken-with-chilli-sauce-template-food-background.jpg?v=2023-04-28T11:31:39.003Z"
						display="block"
						max-width="100%"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						lg-height="200px"
						md-height="350px"
						border-radius="4px 4px 0 0"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/fried-chicken-with-chilli-sauce-template-food-background.jpg?v=2023-04-28T11%3A31%3A39.003Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/fried-chicken-with-chilli-sauce-template-food-background.jpg?v=2023-04-28T11%3A31%3A39.003Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/fried-chicken-with-chilli-sauce-template-food-background.jpg?v=2023-04-28T11%3A31%3A39.003Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/fried-chicken-with-chilli-sauce-template-food-background.jpg?v=2023-04-28T11%3A31%3A39.003Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/fried-chicken-with-chilli-sauce-template-food-background.jpg?v=2023-04-28T11%3A31%3A39.003Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/fried-chicken-with-chilli-sauce-template-food-background.jpg?v=2023-04-28T11%3A31%3A39.003Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/fried-chicken-with-chilli-sauce-template-food-background.jpg?v=2023-04-28T11%3A31%3A39.003Z&quality=85&w=3200 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 30px 30px 30px"
						border-color="--color-darkL1"
						border-radius="0 0 4px 4px"
						lg-padding="20px 20px 20px 20px"
						flex="1 1 0%"
						display="flex"
						flex-direction="column"
					>
						<Text margin="0px 0px 15px 0px" font="normal 600 20px/1.2 --fontFamily-sans">
							Steak and stout stew
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-serifGaramond" lg-margin="0px 0px 18px 0px" flex="1 1 0%">
							This dish features al dente linguine pasta tossed in a flavorful blend of garlic, herbs, and Parmesan cheese.
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							justify-content="space-between"
							align-items="center"
						>
							<Button background="--color-darkL1" border-radius="4px" href="/">
								Read more
							</Button>
							<Text margin="0px 0px 0px 0px" font="normal 600 20px/1.5 --fontFamily-serifGaramond">
								20 $
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="90px 0 100px 0" background="linear-gradient(180deg,--color-dark 0%,rgba(1, 1, 1, 0.6) 72.9%) 0 0 no-repeat,rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/dark-creative-kitchen-background-top-view.jpg?v=2023-05-06T13:21:57.461Z) 0% 0% /cover no-repeat scroll padding-box" quarkly-title="Price-18">
			<Override slot="SectionContent" />
			<Text margin="0px 0px 20px 0px" text-align="center" font="normal 500 46px/1.2 --fontFamily-sans" color="--light">
				Culinary Basics
			</Text>
			<Text
				margin="0px 0px 70px 0px"
				text-align="center"
				font="normal 300 25px/1.5 --fontFamily-serifGaramond"
				color="--light"
				width="700px"
				align-self="center"
				md-align-self="auto"
				max-width="100%"
			>
				You will learn{" "}
				<Em>
					basic knife skills
				</Em>
				, how to read recipes, and how to prepare simple dishes such as soups, salads, and pasta.{" "}
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="0 34px"
				lg-grid-template-columns="1fr"
				lg-grid-gap="35px 0"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					background="--color-light"
					border-radius="25px"
					justify-content="space-between"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						align-items="center"
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-with-gloves-flambeing-dish.jpg?v=2023-05-06T13:46:25.596Z"
							display="block"
							width="100%"
							height="300px"
							object-fit="cover"
							border-radius="25px 25px 0 0"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-with-gloves-flambeing-dish.jpg?v=2023-05-06T13%3A46%3A25.596Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-with-gloves-flambeing-dish.jpg?v=2023-05-06T13%3A46%3A25.596Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-with-gloves-flambeing-dish.jpg?v=2023-05-06T13%3A46%3A25.596Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-with-gloves-flambeing-dish.jpg?v=2023-05-06T13%3A46%3A25.596Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-with-gloves-flambeing-dish.jpg?v=2023-05-06T13%3A46%3A25.596Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-with-gloves-flambeing-dish.jpg?v=2023-05-06T13%3A46%3A25.596Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-with-gloves-flambeing-dish.jpg?v=2023-05-06T13%3A46%3A25.596Z&quality=85&w=3200 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Icon
							category="gi"
							icon={GiChickenOven}
							size="64px"
							background="#ffec00"
							padding="15px 15px 15px 15px"
							border-radius="50%"
							margin="-40px 0px 20px 0px"
						/>
						<Box
							min-width="100px"
							min-height="100px"
							margin="0px 0px 25px 0px"
							display="flex"
							flex-direction="column"
							align-items="center"
							padding="0px 25px 0px 25px"
						>
							<Text margin="0px 0px 10px 0px" color="--darkL1" text-align="center" font="normal 400 20px/1.5 --fontFamily-sansHelvetica">
								INTERNATIONAL CUISINE
							</Text>
							<Text margin="0px 0px 10px 0px" color="--darkL1" font="normal 600 42px/1.2 --fontFamily-sans">
								$120
							</Text>
							<Text margin="0px 0px 20px 0px" color="--darkL1" text-align="center" font="normal 600 18px/1.5 --fontFamily-sansHelvetica">
								for week
							</Text>
							<Text margin="0px 0px 0px 0px" color="--darkL1" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" text-align="center">
								In this cooking course, you will explore the flavors and ingredients of different countries around the world. From Italian pasta dishes to spicy Indian curries, you will learn how to prepare a variety of international dishes.
							</Text>
						</Box>
					</Box>
					<Button margin="0px 0px 30px 0px" background="--color-darkL1" href="/">
						Get started
					</Button>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					background="--color-light"
					border-radius="25px"
					justify-content="space-between"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						align-items="center"
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-white-clothes-prepares-chocolate-cake-lady-is-preparing-dessert-woman-bakes-cake.jpg?v=2023-05-06T13:59:51.051Z"
							display="block"
							width="100%"
							height="300px"
							object-fit="cover"
							border-radius="25px 25px 0 0"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-white-clothes-prepares-chocolate-cake-lady-is-preparing-dessert-woman-bakes-cake.jpg?v=2023-05-06T13%3A59%3A51.051Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-white-clothes-prepares-chocolate-cake-lady-is-preparing-dessert-woman-bakes-cake.jpg?v=2023-05-06T13%3A59%3A51.051Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-white-clothes-prepares-chocolate-cake-lady-is-preparing-dessert-woman-bakes-cake.jpg?v=2023-05-06T13%3A59%3A51.051Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-white-clothes-prepares-chocolate-cake-lady-is-preparing-dessert-woman-bakes-cake.jpg?v=2023-05-06T13%3A59%3A51.051Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-white-clothes-prepares-chocolate-cake-lady-is-preparing-dessert-woman-bakes-cake.jpg?v=2023-05-06T13%3A59%3A51.051Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-white-clothes-prepares-chocolate-cake-lady-is-preparing-dessert-woman-bakes-cake.jpg?v=2023-05-06T13%3A59%3A51.051Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-white-clothes-prepares-chocolate-cake-lady-is-preparing-dessert-woman-bakes-cake.jpg?v=2023-05-06T13%3A59%3A51.051Z&quality=85&w=3200 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Icon
							category="gi"
							icon={GiCandyCanes}
							size="64px"
							background="#ffec00"
							padding="15px 15px 15px 15px"
							border-radius="50%"
							margin="-40px 0px 20px 0px"
						/>
						<Box
							min-width="100px"
							min-height="100px"
							margin="0px 0px 25px 0px"
							display="flex"
							flex-direction="column"
							align-items="center"
							padding="0px 25px 0px 25px"
						>
							<Text margin="0px 0px 10px 0px" color="--darkL1" text-align="center" font="normal 400 20px/1.5 --fontFamily-sansHelvetica">
								BAKING AND PASTRY
							</Text>
							<Text margin="0px 0px 10px 0px" color="--darkL1" font="normal 600 42px/1.2 --fontFamily-sans">
								$85
							</Text>
							<Text margin="0px 0px 20px 0px" color="--darkL1" text-align="center" font="normal 600 18px/1.5 --fontFamily-sansHelvetica">
								for week
							</Text>
							<Text margin="0px 0px 0px 0px" color="--darkL1" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" text-align="center">
								If you have a sweet tooth, this cooking course is perfect for you. You will learn how to make classic desserts such as cakes, pies, and cookies, as well as more advanced pastry techniques such as laminated dough and meringue.{" "}
							</Text>
						</Box>
					</Box>
					<Button margin="0px 0px 30px 0px" background="--color-darkL1" href="/">
						Get started
					</Button>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					background="--color-light"
					border-radius="25px"
					justify-content="space-between"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						align-items="center"
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-placing-herb-gourmet-meal.jpg?v=2023-05-06T14:00:56.165Z"
							display="block"
							width="100%"
							height="300px"
							object-fit="cover"
							border-radius="25px 25px 0 0"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-placing-herb-gourmet-meal.jpg?v=2023-05-06T14%3A00%3A56.165Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-placing-herb-gourmet-meal.jpg?v=2023-05-06T14%3A00%3A56.165Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-placing-herb-gourmet-meal.jpg?v=2023-05-06T14%3A00%3A56.165Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-placing-herb-gourmet-meal.jpg?v=2023-05-06T14%3A00%3A56.165Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-placing-herb-gourmet-meal.jpg?v=2023-05-06T14%3A00%3A56.165Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-placing-herb-gourmet-meal.jpg?v=2023-05-06T14%3A00%3A56.165Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/chef-placing-herb-gourmet-meal.jpg?v=2023-05-06T14%3A00%3A56.165Z&quality=85&w=3200 3200w"
							sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Icon
							category="gi"
							icon={GiBerriesBowl}
							size="64px"
							background="#ffec00"
							padding="15px 15px 15px 15px"
							border-radius="50%"
							margin="-40px 0px 20px 0px"
						/>
						<Box
							min-width="100px"
							min-height="100px"
							margin="0px 0px 25px 0px"
							display="flex"
							flex-direction="column"
							align-items="center"
							padding="0px 25px 0px 25px"
						>
							<Text margin="0px 0px 10px 0px" color="--darkL1" text-align="center" font="normal 400 20px/1.5 --fontFamily-sansHelvetica">
								ADVANCED TECHNIQUES
							</Text>
							<Text margin="0px 0px 10px 0px" color="--darkL1" font="normal 600 42px/1.2 --fontFamily-sans">
								$120
							</Text>
							<Text margin="0px 0px 20px 0px" color="--darkL1" text-align="center" font="normal 600 18px/1.5 --fontFamily-sansHelvetica">
								for week
							</Text>
							<Text margin="0px 0px 0px 0px" color="--darkL1" font="normal 300 16px/1.5 --fontFamily-sansTrebuchet" text-align="center">
								This cooking course is for experienced cooks who want to take their skills to the next level. You will learn advanced techniques such as sous vide cooking, molecular gastronomy, and plating and presentation. We will also discuss how to create your own recipes and menus.
							</Text>
						</Box>
					</Box>
					<Button margin="0px 0px 30px 0px" background="--color-darkL1" href="/">
						Get started
					</Button>
				</Box>
			</Box>
		</Section>
		<Section
			padding="120px 0 120px 0"
			lg-margin="0 0 0 0"
			lg-padding="80px 0 80px 0"
			background="#f7f7f9"
			quarkly-title="Price-14"
		>
			<Text
				margin="0px 0px 70px 0px"
				font="normal 600 42px/1.2 --fontFamily-sansTrebuchet"
				text-align="center"
				md-margin="0px 0px 50px 0px"
				align-self="center"
				color="--darkL1"
				sm-margin="0px 0px 30px 0px"
			>
				Take your business to the next level!
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				lg-margin="0px 0 0px 0"
				md-flex-direction="column"
				border-width="1px"
				lg-flex-direction="row"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="0 30px"
				lg-grid-template-columns="1fr"
				lg-grid-gap="35px 0"
			>
				<Box
					min-width="100px"
					min-height="100px"
					border-color="#e0d9db"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="1"
					width="100%"
					lg-width="100%"
					lg-align-items="stretch"
					padding="0 0px 40px 0px"
					border-width="1px"
					border-style="solid"
					justify-content="space-between"
					background="--color-lightD1"
					lg-padding="0 0px 30px 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						lg-display="flex"
						lg-flex-direction="column"
						lg-text-align="center"
						text-align="center"
					>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							flex-direction="column"
							margin="0px 0px 30px 0px"
							text-align="center"
							background="#0a19d3"
						>
							<Text
								font="normal 300 18px/1.5 --fontFamily-sansTrebuchet"
								color="--lightD2"
								lg-margin="0px 0px 20px 0px"
								sm-margin="0px 0px 10px 0px"
								margin="0 0px 15px 0px"
								padding="25px 25px 10px 25px"
								border-width="0 0 1px 0"
								border-style="solid"
								border-color="#3844d7"
							>
								Basic plan
							</Text>
							<Text margin="0px 0px 10px 0px" font="normal 700 42px/1.5 --fontFamily-sansTrebuchet" color="--light" padding="0px 25px 0px 25px">
								Free
							</Text>
							<Text font="normal 300 18px/1.5 --fontFamily-sansTrebuchet" color="#bac6cd" margin="0 0px 0 0px" padding="0px 25px 25px 25px">
								for month
							</Text>
						</Box>
						<Box min-width="100px" min-height="100px" margin="0px 30px 30px 30px">
							<Text margin="0px 0px 8px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								basic analytics
							</Text>
							<Text margin="0px 0px 8px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								limited storage
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								support via email
							</Text>
						</Box>
					</Box>
					<Button
						color="--light"
						border-color="#0a19d3"
						font="normal 600 17px/1.5 --fontFamily-sansTrebuchet"
						margin="0px 30px 0 30px"
						padding="12px 34px 12px 34px"
						background="#0a19d3"
						lg-margin="0px 0 0 0"
						lg-align-self="center"
						align-self="center"
						hover-background="rgba(10, 25, 211, 0)"
						hover-border-width="2px"
						hover-border-style="solid"
						hover-border-color="#0a19d3"
						hover-color="#0a19d3"
						border-width="2px"
						border-style="solid"
						transition="background-color 1s ease 0s"
					>
						Buy now
					</Button>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					border-color="#e0d9db"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="1"
					width="100%"
					lg-width="100%"
					lg-align-items="stretch"
					padding="0 0px 40px 0px"
					border-width="1px"
					border-style="solid"
					justify-content="space-between"
					background="--color-lightD1"
					lg-padding="0 0px 30px 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						lg-display="flex"
						lg-flex-direction="column"
						lg-text-align="center"
						text-align="center"
					>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							flex-direction="column"
							margin="0px 0px 30px 0px"
							text-align="center"
							background="#0a19d3"
						>
							<Text
								font="normal 300 18px/1.5 --fontFamily-sansTrebuchet"
								color="--lightD2"
								lg-margin="0px 0px 20px 0px"
								sm-margin="0px 0px 10px 0px"
								margin="0 0px 15px 0px"
								padding="25px 25px 10px 25px"
								border-width="0 0 1px 0"
								border-style="solid"
								border-color="#3844d7"
							>
								Standard plan
							</Text>
							<Text margin="0px 0px 10px 0px" font="normal 700 42px/1.5 --fontFamily-sansTrebuchet" color="--light" padding="0px 25px 0px 25px">
								$30.00
							</Text>
							<Text font="normal 300 18px/1.5 --fontFamily-sansTrebuchet" color="#bac6cd" margin="0 0px 0 0px" padding="0px 25px 25px 25px">
								for month
							</Text>
						</Box>
						<Box min-width="100px" min-height="100px" margin="0px 30px 30px 30px">
							<Text margin="0px 0px 8px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								including advanced analytics
							</Text>
							<Text margin="0px 0px 8px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								unlimited storage
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								priority support via email and phone
							</Text>
						</Box>
					</Box>
					<Button
						color="--light"
						border-color="#0a19d3"
						font="normal 600 17px/1.5 --fontFamily-sansTrebuchet"
						margin="0px 30px 0 30px"
						padding="12px 34px 12px 34px"
						background="#0a19d3"
						lg-margin="0px 0 0 0"
						lg-align-self="center"
						align-self="center"
						hover-background="rgba(10, 25, 211, 0)"
						hover-border-width="2px"
						hover-border-style="solid"
						hover-border-color="#0a19d3"
						hover-color="#0a19d3"
						border-width="2px"
						border-style="solid"
						transition="background-color 1s ease 0s"
					>
						Buy now
					</Button>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					border-color="#e0d9db"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="1"
					width="100%"
					lg-width="100%"
					lg-align-items="stretch"
					padding="0 0px 40px 0px"
					border-width="1px"
					border-style="solid"
					justify-content="space-between"
					background="--color-lightD1"
					lg-padding="0 0px 30px 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						lg-display="flex"
						lg-flex-direction="column"
						lg-text-align="center"
						text-align="center"
					>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							flex-direction="column"
							margin="0px 0px 30px 0px"
							text-align="center"
							background="#0a19d3"
						>
							<Text
								font="normal 300 18px/1.5 --fontFamily-sansTrebuchet"
								color="--lightD2"
								lg-margin="0px 0px 20px 0px"
								sm-margin="0px 0px 10px 0px"
								margin="0 0px 15px 0px"
								padding="25px 25px 10px 25px"
								border-width="0 0 1px 0"
								border-style="solid"
								border-color="#3844d7"
							>
								Premium plan
							</Text>
							<Text margin="0px 0px 10px 0px" font="normal 700 42px/1.5 --fontFamily-sansTrebuchet" color="--light" padding="0px 25px 0px 25px">
								$50.00
							</Text>
							<Text font="normal 300 18px/1.5 --fontFamily-sansTrebuchet" color="#bac6cd" margin="0 0px 0 0px" padding="0px 25px 25px 25px">
								for month
							</Text>
						</Box>
						<Box min-width="100px" min-height="100px" margin="0px 30px 30px 30px">
							<Text margin="0px 0px 8px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								including advanced analytics
							</Text>
							<Text margin="0px 0px 8px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								unlimited storage
							</Text>
							<Text margin="0px 0px 8px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								priority support via email and phone
							</Text>
							<Text margin="0px 0px 8px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								API access
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 300 18px/1.2 --fontFamily-sans" color="#80868a">
								custom branding
							</Text>
						</Box>
					</Box>
					<Button
						color="--light"
						border-color="#0a19d3"
						font="normal 600 17px/1.5 --fontFamily-sansTrebuchet"
						margin="0px 30px 0 30px"
						padding="12px 34px 12px 34px"
						background="#0a19d3"
						lg-margin="0px 0 0 0"
						lg-align-self="center"
						align-self="center"
						hover-background="rgba(10, 25, 211, 0)"
						hover-border-width="2px"
						hover-border-style="solid"
						hover-border-color="#0a19d3"
						hover-color="#0a19d3"
						border-width="2px"
						border-style="solid"
						transition="background-color 1s ease 0s"
					>
						Buy now
					</Button>
				</Box>
			</Box>
		</Section>
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