import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import QuarklycommunityKitCarousel from "./QuarklycommunityKitCarousel";
const defaultProps = {
	"display": "block",
	"autoPlayBehavior": "range"
};
const overrides = {};

const A1 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <QuarklycommunityKitCarousel {...rest}>
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
		{children}
	</QuarklycommunityKitCarousel>;
};

Object.assign(A1, { ...QuarklycommunityKitCarousel,
	defaultProps,
	overrides
});
export default A1;