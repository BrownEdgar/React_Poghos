import ContentLoader from 'react-content-loader'

const DoorDashFavorite = props => (
  <ContentLoader
    width={520}
    height={400}
    viewBox="0 0 520 200"
    backgroundColor="#f0f0f0"
    foregroundColor="orange"
    {...props}
  >
    <rect x="55" y="7" rx="10" ry="10" width="450" height="140" />
  </ContentLoader>
)

export default DoorDashFavorite