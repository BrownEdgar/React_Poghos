import ContentLoader from 'react-content-loader'

const DoorDashFavorite = props => (
  <ContentLoader
    width={620}
    height={400}
    viewBox="0 0 620 400"
    backgroundColor="#f0f0f0"
    foregroundColor="orange"
    {...props}
  >
    <rect x="55" y="57" rx="10" ry="10" width="550" height="160" />
  </ContentLoader>
)

export default DoorDashFavorite