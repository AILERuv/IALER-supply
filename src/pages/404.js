import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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
		<Section background="linear-gradient(264.47deg,#ff8f00 29.5%,#000000 65.7%)" padding="36px 0 36px 0" quarkly-title="Header">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				display="flex"
				justify-content="center"
			/>
			<Image
				height="auto"
				src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14:41:50.894Z"
				width="500%"
				max-width="400px"
				overflow="visible"
				margin="0px 0 0px 0"
				srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=3200 3200w"
				sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section background="linear-gradient(264.47deg,#ff8f00 26.2%,#050505 65.7%)" padding="36px 0 80px 0" quarkly-title="HeroBlock">
			<Override
				slot="SectionContent"
				md-z-index="7"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				padding="0px 0px 0px 0px"
				width="1000px"
				height="300px"
				align-items="center"
				display="flex"
				justify-content="center"
				flex-wrap="no-wrap"
			/>
			<Box
				empty-border-width="1px"
				align-items="center"
				md-width="100%"
				display="flex"
				flex-direction="column"
				empty-border-color="LightGray"
				width="70%"
				justify-content="center"
				padding="0px 180px 0px 0px"
				lg-padding="0px 90px 0px 0px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-min-width="64px"
				md-padding="0px 0px 0px 0px"
			>
				<Text
					font="--base"
					color="--grey"
					text-transform="uppercase"
					lg-text-align="left"
					lg-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 8px 0px"
					lg-margin="0px 0px 8px 0px"
					sm-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					letter-spacing="0.1em"
				>
					CHECK BACK LATER #error 404
				</Text>
				<Text
					letter-spacing="1%"
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--white"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Making is beatiful
				</Text>
				<Text
					opacity="0.7"
					font="--base"
					letter-spacing="0.05em"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
				>
					Pardon the inconvenience. Our team is working hard to make this experience much more enjoyable.
				</Text>
			</Box>
		</Section>
		<Section background="--color-dark" padding="100px 0 0px 0" md-padding="40px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" padding="0px 0px 0px 500px" />
			<Box
				empty-border-color="LightGray"
				flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-border-style="solid"
				width="25%"
				display="flex"
			>
				<Image
					max-width="171px"
					src="https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14:41:50.894Z"
					margin="0px 0px 24px 0px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14:41:50.894Z) 0% 0% /auto repeat scroll padding-box"
					srcSet="https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66e9916328b5e30023ac82d0/images/Ailer-Gek-Fondo-Transparente-V5.png?v=2024-09-17T14%3A41%3A50.894Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<SocialMedia
					twitter="https://twitter.com/quarklyapp"
					telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					instagram="https://www.instagram.com/instagram/"
					align-items="flex-start"
					justify-content="flex-start"
					facebook="https://www.facebook.com/quarklyapp/"
				>
					<Override
						slot="link"
						lg-display="flex"
						lg-align-items="center"
						border-radius="50%"
						color="--light"
						margin="0 12px 0 0px"
						lg-width="28px"
						lg-justify-content="center"
						hover-background="--color-indigo"
						background="--color-greyD1"
						lg-height="28px"
						lg-padding="4px 4px 4px 4px"
					/>
					<Override slot="icon" lg-font="18px sans-serif" />
				</SocialMedia>
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