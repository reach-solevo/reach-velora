import { Clock, Lightbulb, CheckCircle, Layers, Zap, Globe } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Faster Concept-to-Prototype Progression",
      description: "Digital prototyping shortens development cycles, allowing teams to move from concept to prototype-ready assets much faster before committing to physical samples."
    },
    {
      icon: Lightbulb,
      title: "Better Design Exploration",
      description: "Teams can experiment with multiple forms, materials, structures, and visual directions without slowing down the workflow, enabling more creative freedom."
    },
    {
      icon: CheckCircle,
      title: "Clearer Stakeholder Approvals",
      description: "Realistic 3D models communicate design intent more effectively than flat drawings, making reviews, feedback, and approvals faster and more accurate."
    },
    {
      icon: Layers,
      title: "Reduced Interpretation Errors",
      description: "Detailed 3D assets create a shared visual reference, reducing miscommunication between teams, manufacturers, and external partners."
    },
    {
      icon: Zap,
      title: "Stronger Speed to Market",
      description: "Rapid iteration and improved decision-making help brands respond faster to trends, buyer feedback, and performance requirements."
    },
    {
      icon: Globe,
      title: "More Sustainable Development",
      description: "Reducing dependence on repeated physical samples lowers material usage, minimizes waste, and supports more sustainable product development processes."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-peach-600">
          Benefits of REACH Velora
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Advanced 3D Footwear Design & Development Platform
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-peach-50 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-peach-400 mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;