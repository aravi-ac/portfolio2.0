import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	FontFace: {
		Inter: ['Inter'],
		Merriweather: ['Merriweather'],
		LibreFranklin: ['Libre Franklin'],
	},
	colors: {
		primary: '#ffb400',
		secondary: '#666666',
	},
})
