import Feature from "../Feature/Feature"

const FeaturesContainer = () => {
  const features = [
    {
      icon: "src/assets/icon-chat.png",
      iconName: "Chat Icon",
      title: "You are our #1 priority",
      description: `Need to talk to a representative? You can get in touch through our
      24/7 chat or through a phone call in less than 5 minutes.`
    },
    {
      icon: "src/assets/icon-money.png",
      iconName: "Money icon",
      title: "More savings means higher rates",
      description: `The more you save with us, the higher your interest rate will be!`
    },
    {
      icon: "src/assets/icon-security.png",
      iconName: "Security icon",
      title: "Security you can trust",
      description: `We use top of the line encryption to make sure your data and money
      is always safe.`
    }
  ]

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature) => (
        <Feature feature={feature} key={feature.iconName}/>
      ))}
    </section>
  )
  
}

export default FeaturesContainer