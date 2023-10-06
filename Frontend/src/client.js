// import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {createClient} from '@sanity/client'

export const client=createClient({
    // projectId:import.meta.REACT_APP_SANITY_PROJECT_ID,
    projectId:"l2v1crew",
    dataset:'production',
    apiVersion:'2022-02-03',
    useCdn:true,
    token:import.meta.REACT_APP_SANITY_TOKEN,
})


const builder = imageUrlBuilder(client)

export const urlFor=(source) => builder.image(source)