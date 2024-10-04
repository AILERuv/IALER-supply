import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Strong, Span, Icon, LinkBox, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { TiThMenu } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { MdViewHeadline } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section background="linear-gradient(264.47deg,#000000 29.39%,#000000 93.49%)" padding="36px 0 36px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
			>
				<Image
					height="auto"
					src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14:41:50.894Z"
					width="100%"
					max-width="171px"
					srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="70%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel md-z-index="9">
					<Override
						slot="Content"
						align-items="center"
						padding="16px 0px 16px 16px"
						md-background="--color-light"
						md-z-index="9"
						md-justify-content="flex-start"
						background="rgba(255, 255, 255, 0)"
						justify-content="center"
					/>
					<Override slot="Children" justify-content="center" display="flex" align-items="center" />
					<Override slot="Button Text" md-display="none" />
					<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
					<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
					<Override slot="Wrapper" md-z-index="9" />
					<Box
						display="flex"
						align-items="center"
						justify-content="flex-end"
						md-flex-direction="column"
						md-margin="40px 0px 13px 0px"
						md-font="--headline4"
						overflow="visible"
					>
						<Link
							href="#"
							font="MontserratExtrabold"
							text-decoration-line="initial"
							color="--white"
							margin="0px 20px 0px 20px"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							md-color="--indigo"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								<Strong>
									Inicio
								</Strong>
							</Span>
						</Link>
						<Link
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="#about"
							font="--base"
							text-decoration-line="initial"
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							color="--green"
							margin="0px 20px 0px 20px"
							opacity="0.8"
							border-color="#91ff7c"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								<Strong>
									APP
								</Strong>
							</Span>
						</Link>
						<Link
							color="--lightD1"
							margin="0px 20px 0px 20px"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							href="/tienda1"
							font="--base"
							opacity="0.8"
							hover-opacity="1"
							md-color="--indigo"
							text-decoration-line="initial"
						>
							<Strong>
								TIENDA
							</Strong>
						</Link>
						<Link
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							font="--base"
							color="--light"
							opacity="0.8"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="#testimonial"
							text-decoration-line="initial"
							margin="0px 8px 0px 20px"
							width="115px"
						>
							Contactos
						</Link>
						<LinkBox
							quarkly-title="Menú-LinkBox"
							hover-color="rgba(0, 0, 0, 0.99)"
							hover-padding="0 0px 0px 0px"
							hover-margin="20px 0px 0px 0px"
							hover-background="rgba(0, 0, 0, 0) linear-gradient(0deg,#09112e 0%,transparent 100%) 0 0/auto no-repeat scroll padding-box"
							hover-border-radius={0}
							hover-opacity="1"
						>
							<Icon
								category="ti"
								icon={TiThMenu}
								size="64px"
								color="#ffffff"
								width="40px"
								height="40px"
								quarkly-title="Menú"
							/>
						</LinkBox>
						<LinkBox quarkly-title="Carrito de compras-LinkBox" hover-margin="20px 0px 0px 0px" href="/tienda1">
							<Icon
								category="fa"
								icon={FaShoppingCart}
								size="64px"
								color="#ffffff"
								padding="0px 0px 0px 0px"
								width="35px"
								height="35px"
								quarkly-title="Carrito de compras"
							/>
						</LinkBox>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,#000000 0%,#9AD36E 92.4%)"
			padding="36px 0 200px 0"
			quarkly-title="HeroBlock"
			md-padding="36px 0 60px 0"
			sm-padding="36px 0px 60px 0"
			sm-position="static"
			lg-padding="36px 0 150px 0"
			border-color="#000000"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
				margin="0px 0 0px 64px"
			/>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				display="flex"
				align-items="flex-start"
				lg-padding="0px 90px 0px 0px"
				md-width="100%"
				justify-content="center"
				width="70%"
				padding="0px 180px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text
					lg-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 8px 0px"
					color="--dark"
					lg-text-align="left"
					font="--base"
					text-transform="uppercase"
					lg-margin="0px 0px 8px 0px"
					sm-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
				/>
				<Text
					lg-text-align="left"
					lg-font="normal 700 150px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="normal 700 250px/1.2 --fontFamily-googleInter"
					color="--light"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
					width="786px"
					lg-padding="0px 0px 0px 0px"
				>
					AILER
				</Text>
				<Text
					font="--base"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
					opacity="1"
					width="400px"
				/>
			</Box>
			<Box
				empty-border-style="solid"
				width="30%"
				display="flex"
				justify-content="flex-end"
				empty-border-width="1px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				align-items="center"
				md-width="100%"
				md-order="-1"
				empty-min-width="64px"
			>
				<Image
					lg-max-height="400px"
					width="100%"
					max-height="450px"
					md-margin="0px 0px 30px 0px"
					src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17:11:09.041Z"
					lg-position="relative"
					lg-left="-5px"
					max-width="100%"
					srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Lag-V7.png?v=2024-09-17T17%3A11%3A09.041Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section background="rgba(0, 0, 0, 0) linear-gradient(0deg,#000000 0%,rgba(0,0,0,1) 100%) 0% 0% /auto repeat scroll padding-box" lg-border-color="#79b55d" border-color="#000000">
			<Box
				lg-margin="32px 0px 0px 0px"
				md-width="100%"
				md-margin="36px 0px 0px 0px"
				display="flex"
				flex-direction="row"
				flex-wrap="no-wrap"
				align-items="center"
				justify-content="center"
				margin="02px 0px 0px 0px"
			>
				<Link
					sm-margin="0px 22px 0px 0px"
					transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
					href="/login"
					text-decoration-line="initial"
					sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-padding="15px 13px 15px 13px"
					md-text-align="center"
					lg-margin="0px 32px 0px 0px"
					padding="15px 30px 15px 30px"
					border-radius="10px"
					lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					md-padding="15px 16px 15px 16px"
					hover-color="--dark"
					color="--white"
					margin="0px 0px 0px 50px"
					lg-padding="15px 23px 15px 23px"
					md-width="50%"
					background="--color-grey linear-gradient(0deg,#000000 0%,#000000 100%)"
					font="--lead"
					hover-background="--color-greyD1 linear-gradient(0deg,#DAF7A6 0%,#DAF7A6 100%)"
					border-width="4px"
					border-style="solid"
					border-color="--color-white"
					box-shadow="0 0 0px 0 transparent"
					lg-border-color="#ffffff"
					lg-color="#ffffff"
					lg-hover-color="#ffffff"
					lg-hover-background="linear-gradient(180deg,transparent 0%,transparent 100%) 0 0 no-repeat"
					lg-hover-padding="15px 23px 15px 23px"
				>
					Empieza ahora
				</Link>
				<Link
					padding="15px 30px 15px 30px"
					font="--lead"
					border-radius="10px"
					border-width="2px"
					transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
					lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					border-style="solid"
					md-width="50%"
					md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					md-text-align="center"
					sm-padding="15px 13px 15px 13px"
					text-decoration-line="initial"
					color="--light"
					background="rgba(255, 5, 5, 0)"
					margin="0px 0px 0px 0px"
					border-color="rgba(255, 255, 255, 0.3)"
					sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					hover-background="--color-white"
					hover-color="--indigo"
					href="/login"
					lg-padding="15px 23px 15px 23px"
					md-padding="15px 16px 15px 16px"
				>
					Descubre más
				</Link>
			</Box>
		</Section>
		<Section background="--color-dark" padding="100px 0 100px 0" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				flex-direction="column"
				md-justify-content="center"
				display="flex"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="25%"
				md-align-items="center"
			>
				<Image
					src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14:41:50.894Z"
					margin="0px 0px 24px 0px"
					max-width="171px"
					srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<SocialMedia
					facebook="https://www.facebook.com/quarklyapp/"
					twitter="https://twitter.com/quarklyapp"
					telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					instagram="https://www.instagram.com/instagram/"
					align-items="flex-start"
					justify-content="flex-start"
				>
					<Override
						slot="link"
						margin="0 12px 0 0px"
						hover-background="--color-indigo"
						background="--color-greyD1"
						lg-height="28px"
						lg-padding="4px 4px 4px 4px"
						lg-display="flex"
						lg-align-items="center"
						border-radius="50%"
						lg-justify-content="center"
						lg-width="28px"
						color="--light"
					/>
					<Override slot="icon" lg-font="18px sans-serif" />
				</SocialMedia>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				md-width="100%"
				md-justify-content="center"
				empty-border-width="1px"
				empty-border-style="solid"
				flex-direction="column"
				padding="16px 16px 16px 16px"
				md-align-items="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					LINK CORTOS
				</Text>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
				>
					Casa{"\n\n"}
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					Servicios{"\n\n"}
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					Capturas de pantalla{"\n\n"}
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
				>
					Contacto{"\n\n"}
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				flex-direction="column"
				md-justify-content="center"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				md-width="100%"
				md-align-items="center"
				empty-border-width="1px"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					LINK DE AYUDA
				</Text>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					Cómo descargar{"\n\n"}
				</Link>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
				>
					Cómo funciona{"\n\n"}
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
				>
					Tutorial en video{"\n\n"}
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					FAQs
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				display="flex"
				flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="https://play.google.com/store"
					transition="opacity 0.3s ease 0s"
					target="_blank"
				>
					Google Play Store
				</Link>
				<Link
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
				>
					Apple App Store
				</Link>
				<Link
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
				>
					Download Directly
				</Link>
			</Box>
		</Section>
		<Section background="#020202">
			<Icon
				category="md"
				icon={MdViewHeadline}
				size="64px"
				color="#ffffff"
				width="50px"
				height="50px"
				quarkly-title="Carrito de compras"
			/>
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