export default function Profile() {
  return (
    <div className="profile">
      <div className="h-[200px] overflow-hidden">
        <img className="w-full h-full object-cover" src={require('../img/wallpaper_cliff_1920x1080.jpg')} alt=""/>
      </div>
      <div className="ml-16 -mt-16">
        <div className="rounded-full w-[120px] h-[120px] overflow-hidden mb-3">
          <img className="w-full h-full object-cover" src="https://placehold.co/70" alt=""/>
        </div>
        <h2 className="text-2xl">Donal Noye</h2>
        <p>bdfffffffffffffb</p>
      </div>
    </div>
  )
}