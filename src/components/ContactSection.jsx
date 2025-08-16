import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-b from-secondary/40 to-secondary/10"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let’s talk!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rogersawadogo12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-card/50 backdrop-blur-md rounded-xl shadow-md flex items-center space-x-4 
                       hover:shadow-lg hover:scale-[1.03] hover:bg-card/70 transition-transform duration-200 cursor-pointer"
          >
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-muted-foreground">rogersawadogo12@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+212619933585"
            className="p-6 bg-card/50 backdrop-blur-md rounded-xl shadow-md flex items-center space-x-4 
                       hover:shadow-lg hover:scale-[1.03] hover:bg-card/70 transition-transform duration-200 cursor-pointer"
          >
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-muted-foreground">+212 619 933 585</p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps?q=Rabat,+Morocco"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-card/50 backdrop-blur-md rounded-xl shadow-md flex items-center space-x-4 
                       hover:shadow-lg hover:scale-[1.03] hover:bg-card/70 transition-transform duration-200 cursor-pointer"
          >
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-muted-foreground">Rabat, Morocco</p>
            </div>
          </a>
        </div>

        {/* Socials */}
        <div className="flex space-x-4 justify-center mt-10">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition cursor-pointer hover:scale-110 duration-200"
          >
            <Linkedin className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};
