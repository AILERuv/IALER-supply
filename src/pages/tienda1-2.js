import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, LinkBox, Structure, List, Hr, Section, Icon, Text, Button, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { BsFillPersonFill, BsClock } from "react-icons/bs";
import { IoLogoDropbox, IoIosArrowRoundForward, IoMdPeople, IoIosTrash } from "react-icons/io";
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
					href="/404"
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
					href="/404"
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
					href="/one-edit"
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
				<Link
					href="/tienda1"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Tienda
				</Link>
			</List>
			<Hr
				min-height="10px"
				margin="0px 0px 50px 0px"
				width="300px"
				align-self="center"
				border-color="#a36c51"
				padding="0px 0px 5px 0px"
			/>
		</Section>
		<Section
			padding="90px 0 100px 0"
			display="flex"
			flex-direction="column"
			background="#0B0008"
			quarkly-title="Cards-2"
		>
			<Override slot="SectionContent" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				lg-flex-direction="column"
				sm-width="100%"
			>
				<Box
					min-width="100px"
					min-height="100px"
					margin="0px 0px 0 0"
					display="flex"
					flex-direction="column"
					justify-content="flex-end"
					padding="30px 30px 30px 30px"
					background="linear-gradient(180deg,rgba(4, 8, 12, 0.35) 0%,#000000 100%) 0 0 no-repeat,rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1599012307530-d163bd04ecab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover repeat scroll padding-box"
					height="500px"
					width="65%"
					lg-width="auto"
					lg-margin="0px 0px 30px 0"
					lg-height="400px"
				>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						align-items="center"
						margin="0px 0px 20px 0px"
						lg-margin="0px 0px 15px 0px"
						sm-flex-direction="column"
						sm-align-items="flex-start"
					>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							border-color="--color-lightD2"
							padding="0 0px 0px 0px"
							border-width={0}
							border-style="solid"
							margin="0px 18px 0px 0px"
							sm-margin="0px 18px 6px 0px"
						>
							<Icon category="bs" icon={BsFillPersonFill} size="24px" color="--light" />
							<Text margin="0px 0 0px 10px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans" color="#bec4ca">
								Maria Williams
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							border-color="--color-lightD2"
							padding="0 0px 0px 0px"
							border-width={0}
							border-style="solid"
						>
							<Icon category="bs" icon={BsClock} size="24px" color="--light" />
							<Text margin="0px 0 0px 10px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans" color="#bec4ca">
								April 10, 2023
							</Text>
						</Box>
					</Box>
					<LinkBox align-items="flex-start" margin="0px 0px 15px 0px" href="/tienda1" lg-margin="0px 0px 0 0px">
						<Text margin="0px 0px 0 0px" font="normal 500 25px/1.2 --fontFamily-serifGaramond" color="--light">
							INMOBILIARIA
						</Text>
					</LinkBox>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					grid-template-columns="repeat(3, 1fr)"
					grid-gap="0 50px"
					lg-grid-gap="35px 0"
					md-grid-template-columns="1fr"
					lg-grid-template-columns="1fr"
					flex-direction="column"
					margin="0px 0px 0px 15px"
					width="35%"
					lg-width="auto"
					lg-margin="0px 0px 0px 0"
				>
					<Box
						min-width="100px"
						min-height="100px"
						md-margin="0px 0px 0 0px"
						margin="0px 0px 0 0"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						padding="30px 30px 30px 30px"
						background="linear-gradient(180deg,rgba(4, 8, 12, 0.35) 0%,#000000 100%) 0 0 no-repeat,rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1504532686278-1baa5d6358cf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover repeat scroll padding-box"
						height="250px"
						lg-height="300px"
					>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0px 0px 20px 0px"
							lg-margin="0px 0px 15px 0px"
							sm-align-items="flex-start"
							sm-flex-direction="column"
						>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="--color-lightD2"
								padding="0 0px 0px 0px"
								border-width={0}
								border-style="solid"
								margin="0px 18px 0px 0px"
								sm-margin="0px 18px 6px 0px"
							>
								<Icon category="bs" icon={BsFillPersonFill} size="24px" color="--light" />
								<Text margin="0px 0 0px 10px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans" color="#bec4ca">
									Maria Williams
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="--color-lightD2"
								padding="0 0px 0px 0px"
								border-width={0}
								border-style="solid"
							>
								<Icon category="bs" icon={BsClock} size="24px" color="--light" />
								<Text margin="0px 0 0px 10px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans" color="#bec4ca">
									May 20, 2023
								</Text>
							</Box>
						</Box>
						<LinkBox align-items="flex-start" margin="0px 0px 15px 0px" href="/one-edit" lg-margin="0px 0px 0 0px">
							<Text margin="0px 0px 0 0px" font="normal 500 25px/1.2 --fontFamily-serifGaramond" color="--light">
								PRODUCTOS
							</Text>
						</LinkBox>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						md-margin="0px 0px 0 0px"
						margin="0px 0px 0 0"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						padding="30px 30px 30px 30px"
						background="linear-gradient(180deg,rgba(4, 8, 12, 0.35) 0%,#000000 100%) 0 0 no-repeat,rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1736267740792-e703ee44f3f1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover repeat scroll padding-box"
						height="250px"
						lg-height="300px"
					>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0px 0px 20px 0px"
							lg-margin="0px 0px 15px 0px"
							sm-align-items="flex-start"
							sm-flex-direction="column"
						>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="--color-lightD2"
								padding="0 0px 0px 0px"
								border-width={0}
								border-style="solid"
								margin="0px 18px 0px 0px"
								sm-margin="0px 18px 6px 0px"
							>
								<Icon category="bs" icon={BsFillPersonFill} size="24px" color="--light" />
								<Text margin="0px 0 0px 10px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans" color="#bec4ca">
									Alex Foster
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="--color-lightD2"
								padding="0 0px 0px 0px"
								border-width={0}
								border-style="solid"
							>
								<Icon category="bs" icon={BsClock} size="24px" color="--light" />
								<Text margin="0px 0 0px 10px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans" color="#bec4ca">
									June 8, 2023
								</Text>
							</Box>
						</Box>
						<LinkBox align-items="flex-start" margin="0px 0px 15px 0px" href="/404" lg-margin="0px 0px 0 0px">
							<Text margin="0px 0px 0 0px" font="normal 500 25px/1.2 --fontFamily-serifGaramond" color="--light">
								The Island of Secrets
							</Text>
						</LinkBox>
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
		<Section
			padding="60px 0 90px 0"
			sm-padding="40px 0"
			sm-min-height="auto"
			display="flex"
			background="#0B0008"
			quarkly-title="Advantages/Features-10"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				margin="0px 0px 64px 0px"
				lg-justify-content="flex-start"
			>
				<Text
					as="h1"
					margin="0px"
					font="--headline2"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					text-align="left"
				>
					We're here to help
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--lightD2"
					width="60%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					text-align="left"
					lg-width="100%"
					lg-max-width="720px"
				>
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam

voluptatum cupiditate veritatis in accusamus quisquam.
				</Text>
			</Box>
			<Box
				width="100%"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				lg-grid-template-columns="1fr"
				lg-grid-gap="48px"
			>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoLogoDropbox}
						size="42px"
						color="--light"
						background="--color-red"
						padding="8px 8px 8px 8px"
						border-radius="8px"
						sm-margin="0px 0px 12px 0px"
						margin="0px 0px 20px 0px"
					/>
					<Box align-items="flex-start" display="flex" flex-direction="column" lg-max-width="720px">
						<Text font="--lead" color="--light" margin="0px 0px 6px 0px">
							<Strong>
								Unlimited inboxes
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--lightD2">
							Non quo aperiam repellendus quas est est. Eos
aut dolore aut ut sit nesciunt. Ex tempora quia. Sit
nobis consequatur dolores incidunt
						</Text>
					</Box>
					<LinkBox
						flex-direction="row"
						align-items="center"
						justify-content="flex-start"
						color="--red"
						hover-opacity="0.7"
						transition="--opacityOut"
					>
						<Text margin="0px 0px 0px 0px" letter-spacing="0.3px">
							<Strong>
								Learn more
							</Strong>
						</Text>
						<Icon category="io" icon={IoIosArrowRoundForward} size="24px" />
					</LinkBox>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoMdPeople}
						size="42px"
						color="--light"
						background="--color-red"
						padding="8px 8px 8px 8px"
						border-radius="8px"
						sm-margin="0px 0px 12px 0px"
						margin="0px 0px 20px 0px"
					/>
					<Box align-items="flex-start" display="flex" flex-direction="column" lg-max-width="720px">
						<Text font="--lead" color="--light" margin="0px 0px 6px 0px">
							<Strong>
								Manage team members
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--lightD2">
							Vero eum voluptatem aliquid nostrum voluptatem.

Vitae esse natus. Earum nihil deserunt eos quasi
cupiditate. A inventore et molestiae natus.
						</Text>
					</Box>
					<LinkBox
						flex-direction="row"
						align-items="center"
						justify-content="flex-start"
						color="--red"
						hover-opacity="0.7"
						transition="--opacityOut"
					>
						<Text margin="0px 0px 0px 0px" letter-spacing="0.3px">
							<Strong>
								Learn more
							</Strong>
						</Text>
						<Icon category="io" icon={IoIosArrowRoundForward} size="24px" />
					</LinkBox>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoIosTrash}
						size="42px"
						color="--light"
						background="--color-red"
						padding="8px 8px 8px 8px"
						border-radius="8px"
						sm-margin="0px 0px 12px 0px"
						margin="0px 0px 20px 0px"
					/>
					<Box align-items="flex-start" display="flex" flex-direction="column" lg-max-width="720px">
						<Text font="--lead" color="--light" margin="0px 0px 6px 0px">
							<Strong>
								Spam report
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--lightD2">
							Et quod quaerat dolorem quaerat architecto
aliquam accusantium. Ex adipisci et doloremque
autem quia quam. Quis eos molestiae at ure
impedit.
						</Text>
					</Box>
					<LinkBox
						flex-direction="row"
						align-items="center"
						justify-content="flex-start"
						color="--red"
						hover-opacity="0.7"
						transition="--opacityOut"
					>
						<Text margin="0px 0px 0px 0px" letter-spacing="0.3px">
							<Strong>
								Learn more
							</Strong>
						</Text>
						<Icon category="io" icon={IoIosArrowRoundForward} size="24px" />
					</LinkBox>
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