import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, LinkBox, Structure, List, Section, Text, Button, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { MdCheckCircle, MdArrowForward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"tienda1"} />
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
		<Section background-color="--dark" text-align="center" padding="2px 0 0px 0" quarkly-title="Footer-1">
			<Structure padding="0px 0px 0px 0px" cells-number-total="1">
				<Override
					slot="Content"
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="row"
				>
					<Override slot="cell-2">
						<Box min-width="100px" min-height="100px" />
					</Override>
					<Override slot="cell-1" />
					<Override
						slot="Cell 0th"
						align-items="center"
						display="flex"
						flex-direction="row"
						justify-content="center"
						flex-wrap="no-wrap"
					/>
					<Override slot="cell-0">
						<LinkBox
							width="300px"
							height="100px"
							align-items="center"
							display="flex"
							flex-direction="row"
							justify-content="center"
							flex-wrap="no-wrap"
						>
							<Image
								src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14:41:50.894Z"
								display="block"
								margin="0px 0px 0px 0"
								srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=3200 3200w"
								sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
						</LinkBox>
					</Override>
				</Override>
			</Structure>
			<List
				margin="0px 0px 0px 0px"
				padding="12px 0px 12px 0px"
				list-style-type="none"
				as="ul"
				display="flex"
				align-items="center"
				justify-content="center"
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
					href="/index"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					INICIO
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14:41:50.894Z"
						display="block"
						width="100%"
						height="420px"
						object-fit="cover"
						object-position="0% 0"
						margin="0px 0px 30px 0px"
						sm-height="350px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14:41:50.894Z"
						display="block"
						width="100%"
						height="420px"
						object-fit="cover"
						object-position="60% 0"
						margin="0px 0px 30px 0px"
						sm-height="350px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14:41:50.894Z"
						display="block"
						width="100%"
						height="420px"
						object-position="100% 0% "
						margin="0px 0px 30px 0px"
						sm-height="350px"
						padding="0px 0px 0px 0px"
						object-fit="cover"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17:57:59.859Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub.png?v=2024-09-19T17%3A57%3A59.859Z&quality=85&w=3200 3200w"
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
		<Section background="#111828" quarkly-title="Test Menu Desplegable" padding="90px 0 120px 0">
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
				margin="70px 0px 0px 0px"
				grid-template-columns="repeat(4, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="40px 35px"
				md-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-rows="repeat(4, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-template-rows="auto"
				display="grid"
				grid-auto-flow="column"
			>
				<Box min-width="100px" min-height="100px" display="flex" flex-direction="column">
					<Image
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21:22:05.277Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=3200 3200w"
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
					<Components.QuarklycommunityKitPopup display="grid">
						<Override slot="Button Open" background="--color-orange">
							Open Popup
						</Override>
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
								justify-content="flex-start"
								overflow-y="hidden"
								overflow-x="hidden"
								lg-width="100%"
								align-items="center"
								lg-justify-content="flex-start"
								lg-padding="0px 0px 0px 0px"
								flex-direction="row"
							>
								<Image
									height="23em"
									width="23em"
									min-height="260px"
									lg-width="auto"
									lg-height="auto"
									object-fit="cover"
									src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21:22:05.277Z"
									display="block"
									border-radius="20px"
									srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=3200 3200w"
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
					</Components.QuarklycommunityKitPopup>
				</Box>
				<Box min-width="100px" min-height="100px" display="grid">
					<Image
						src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21:22:05.277Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=3200 3200w"
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
					<Components.QuarklycommunityKitPopup display="grid">
						<Override slot="Button Open" background="--color-white" color="#000000">
							Open Popup
						</Override>
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
								justify-content="flex-start"
								overflow-y="hidden"
								overflow-x="hidden"
								lg-width="100%"
								align-items="center"
								lg-justify-content="flex-start"
								lg-padding="0px 0px 0px 0px"
								flex-direction="row"
							>
								<Image
									height="23em"
									width="23em"
									min-height="260px"
									lg-width="auto"
									lg-height="auto"
									object-fit="cover"
									src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21:22:05.277Z"
									display="block"
									border-radius="20px"
									srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Cub-Orange.png?v=2024-10-01T21%3A22%3A05.277Z&quality=85&w=3200 3200w"
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
					</Components.QuarklycommunityKitPopup>
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