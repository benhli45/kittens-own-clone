import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '2ufrpv66',
  dataset: 'production',
  apiVersion: '2022-04-01',
  token: 'skNRNWiNiBvI0z5mSZ33TlzXw5OX7Le9Qd1ZvBi72v40yRkfAgJD0yEg02MUe5KfiUxQbYH4Ft4lcC34UprtxVuVSkuYAWBXb3by4teuD0XwFse8U28ltnM2dvlLdDLco2A9Hj18qKVRuof58RJ5idxoKsqOzYDbhK9TecTUM8rSPCuSmv1Q',
  useCdn: false,
})