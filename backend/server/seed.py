from app import app
from models import db, Action, Adventure, Racing, Shooter

with app.app_context():

    print("Deleting data...")
    Action.query.delete()
    Adventure.query.delete()
    Racing.query.delete()
    Shooter.query.delete()

    print("Creating actions...")
    actions = [
        Action(name='Farcry', price='Ksh 5,900', image='https://c4.wallpaperflare.com/wallpaper/257/369/277/far-cry-far-cry-5-boomer-far-cry-5-video-game-wallpaper-preview.jpg', rating='5'),
        Action(name="Marvel's Spider-Man 2", price='Ksh 6,800', image='https://c4.wallpaperflare.com/wallpaper/202/784/19/spiderman-ps4-spiderman-games-hd-wallpaper-preview.jpg', rating='5'),
        Action(name='Ghost of Tsushima', price='Ksh 5,800', image='https://c4.wallpaperflare.com/wallpaper/139/265/83/video-game-ghost-of-tsushima-hd-wallpaper-preview.jpg', rating='5'),
        Action(name='Ratchet & Clank: Rift Apart', price='Ksh 7,200', image='https://images4.alphacoders.com/114/thumbbig-1147409.webp', rating='4'),
        Action(name="Assassin's Creed Valhalla", price="Ksh 6,000", image='https://c4.wallpaperflare.com/wallpaper/1023/66/471/assassin-s-creed-valhalla-viking-video-games-video-game-art-digital-art-hd-wallpaper-preview.jpg', rating='4'),
        Action(name="Returnal", price="Ksh 6,500", image='https://wallpaperaccess.com/full/5871265.jpg', rating='4'),
        Action(name='Uncharted 4', price='Ksh 6,000', image='https://c4.wallpaperflare.com/wallpaper/674/19/624/uncharted-4-ps4-ps3-video-games-wallpaper-preview.jpg', rating='5'),
        Action(name='Batman: Arkham Knight', price='Ksh 5,500', image='https://c4.wallpaperflare.com/wallpaper/122/170/762/video-game-batman-arkham-knight-batman-wallpaper-preview.jpg', rating='5'),
        Action(name='Sekiro: Shadows Die Twice', price='Ksh 6,800', image='https://c4.wallpaperflare.com/wallpaper/612/682/71/sekiro-shadows-die-twice-video-game-poster-wallpaper-preview.jpg', rating='5'),
        Action(name='Nioh 2', price='Ksh 5,900', image='https://c4.wallpaperflare.com/wallpaper/230/592/801/nioh-2-warrior-sword-horns-wallpaper-preview.jpg', rating='4.5')
    ]

    print("Creating adventures...")
    adventures = [
        Adventure(name='Horizon', price="Ksh 4,500", image='https://c4.wallpaperflare.com/wallpaper/8/406/344/horizon-forbidden-west-horizon-ii-forbidden-west-aloy-horizon-zero-dawn-4k-robot-hd-wallpaper-preview.jpg', rating='4'),
        Adventure(name='God of War Ragnarok', price='Ksh 7,500', image='https://c4.wallpaperflare.com/wallpaper/261/457/305/god-of-war-kratos-thor-ragnarok-hd-wallpaper-preview.jpg', rating='5'),
        Adventure(name='The Last of Us Part II', price='Ksh 5,500', image='https://c4.wallpaperflare.com/wallpaper/684/655/646/naughty-dog-the-last-of-us-part-ii-playstation-ellie-ashley-johnson-hd-wallpaper-preview.jpg', rating='4'),
        Adventure(name='Resident Evil Village', price="Ksh 6,000", image='https://c4.wallpaperflare.com/wallpaper/665/534/394/resident-evil-8-chris-redfield-village-resident-evil-village-4k-hd-wallpaper-preview.jpg', rating='4'),
        Adventure(name='Elden Ring', price='Ksh 7,000', image='https://c4.wallpaperflare.com/wallpaper/489/876/39/elden-ring-from-software-fromsoftware-hd-wallpaper-preview.jpg', rating='5'),
        Adventure(name='Bloodborne', price='Ksh 6,500', image='https://c4.wallpaperflare.com/wallpaper/662/415/646/bloodborne-wallpaper-preview.jpg', rating='4.5'),
        Adventure(name='Red Dead Redemption 2', price='Ksh 7,200', image='https://c4.wallpaperflare.com/wallpaper/19/546/239/red-dead-redemption-2-rdr2-arthur-morgan-john-marston-wallpaper-preview.jpg', rating='5'),
        Adventure(name='Shadow of the Colossus', price='Ksh 4,500', image='https://c4.wallpaperflare.com/wallpaper/231/381/244/shadow-of-the-colossus-hd-wallpaper-preview.jpg', rating='4.5'),
        Adventure(name='The Witcher 3: Wild Hunt', price='Ksh 5,800', image='https://c4.wallpaperflare.com/wallpaper/189/83/684/the-witcher-3-wild-hunt-the-witcher-video-game-geralt-of-rivia-wallpaper-preview.jpg', rating='5'),
        Adventure(name='Cyberpunk 2077', price='Ksh 6,000', image='https://c4.wallpaperflare.com/wallpaper/481/324/858/cyberpunk-2077-video-game-hd-wallpaper-preview.jpg', rating='4')
    ]

    print("Creating racings...")
    racings = [
        Racing(name='Gran Turismo 7', price='Ksh 6,000', image='https://c4.wallpaperflare.com/wallpaper/501/625/175/red-bull-hangar-7-wallpaper-preview.jpg', rating='5'),
        Racing(name='Forza Horizon 5', price='Ksh 6,500', image='https://c4.wallpaperflare.com/wallpaper/831/801/77/forza-horizon-5-night-drift-mexico-hd-wallpaper-preview.jpg', rating='5'),
        Racing(name='Forza Horizon 4', price='Ksh 5,500', image='https://c4.wallpaperflare.com/wallpaper/133/889/69/4k-e3-2018-forza-horizon-4-poster-wallpaper-preview.jpg', rating='5'),
        Racing(name='Forza Motorspot 7', price='Ksh 7,500', image='https://c4.wallpaperflare.com/wallpaper/399/582/554/forza-motorsport-7-forza-games-pc-games-wallpaper-preview.jpg', rating='5'),
        Racing(name='Need For Speed Heat', price='Ksh 4,500', image='https://c4.wallpaperflare.com/wallpaper/624/717/140/electronic-arts-ghost-games-nfs-heat-need-for-speed-heat-hd-wallpaper-preview.jpg', rating='4.5'),
        Racing(name='F1 2021', price='Ksh 6,500', image='https://c4.wallpaperflare.com/wallpaper/153/905/275/f1-2021-game-hd-wallpaper-preview.jpg', rating='5'),
        Racing(name='Dirt 5', price='Ksh 5,000', image='https://c4.wallpaperflare.com/wallpaper/49/426/872/dirt-5-2020-video-games-hd-wallpaper-preview.jpg', rating='4'),
        Racing(name='Project Cars 3', price='Ksh 6,000', image='https://c4.wallpaperflare.com/wallpaper/112/477/573/project-cars-3-racing-hd-wallpaper-preview.jpg', rating='4.5'),
        Racing(name='WRC 10', price='Ksh 6,800', image='https://c4.wallpaperflare.com/wallpaper/12/259/149/wrc-10-rally-hd-wallpaper-preview.jpg', rating='4'),
        Racing(name='Assetto Corsa Competizione', price='Ksh 7,200', image='https://c4.wallpaperflare.com/wallpaper/945/409/520/assetto-corsa-competizione-racing-video-games-hd-wallpaper-preview.jpg', rating='5')
    ]

    print("Creating shooters...")
    shooters = [
        Shooter(name='Call of Duty: Modern Warfare 2', price='Ksh 6,500', image='https://c4.wallpaperflare.com/wallpaper/984/871/802/call-of-duty-call-of-duty-modern-warfare-2-video-game-characters-video-games-farah-hd-wallpaper-preview.jpg', rating='4'),
        Shooter(name='Splatoon 2', price="Ksh 5,800", image='https://c4.wallpaperflare.com/wallpaper/998/470/346/club-nintendo-nintendo-nintendo-3ds-nintendo-switch-wallpaper-preview.jpg', rating='4'),
        Shooter(name='Halo Infinite', price='Ksh 5,000', image='https://c4.wallpaperflare.com/wallpaper/220/871/807/halo-infinite-master-chief-pelican-halo-hd-wallpaper-preview.jpg', rating='4'),
        Shooter(name='Far Cry 5', price='Ksh 6,500', image='https://c4.wallpaperflare.com/wallpaper/341/271/730/far-cry-5-wallpaper-preview.jpg', rating='5'),
        Shooter(name='Far Cry 6', price='Ksh 7.000', image='https://c4.wallpaperflare.com/wallpaper/405/1012/14/far-cry-far-cry-6-hd-wallpaper-preview.jpg', rating='5'),
        Shooter(name='Destiny 2', price='Ksh 6.000', image='https://c4.wallpaperflare.com/wallpaper/1/907/695/destiny-destiny-2-hd-wallpaper-preview.jpg', rating='5'),
        Shooter(name='Doom Eternal', price='Ksh 5,900', image='https://c4.wallpaperflare.com/wallpaper/174/753/904/doom-eternal-video-game-hd-wallpaper-preview.jpg', rating='5'),
        Shooter(name='Battlefield 2042', price='Ksh 6,200', image='https://c4.wallpaperflare.com/wallpaper/780/154/917/battlefield-2042-hd-wallpaper-preview.jpg', rating='4'),
        Shooter(name='Apex Legends', price='Ksh 4,500', image='https://c4.wallpaperflare.com/wallpaper/652/663/618/apex-legends-octane-hd-wallpaper-preview.jpg', rating='4.5'),
        Shooter(name='Overwatch', price='Ksh 5,700', image='https://c4.wallpaperflare.com/wallpaper/177/806/168/overwatch-hd-wallpaper-preview.jpg', rating='4.5')
    ]

    db.session.add_all(actions + adventures + racings + shooters)
    db.session.commit()

    print("Data seeded successfully!")
