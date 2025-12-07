import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";

  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    disableMutationObserver: true,
  });

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-[25px] font-bold text-center mb-9 md:mb-12 md:text-4xl formular-bold">CONTACT</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" data-aos="fade-up">
          <Card>
            <CardHeader>
              <CardTitle className="text-[20px] md:text-2xl">Send Message</CardTitle>
              <CardDescription className="text-[13px] sm:text-[15px]">Fill out the form below and I'll get back to you soon!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  required
                  className="
                    border-2 border-[#eaebed]
                    focus:border-[#4ca1af]
                    focus:ring-0
                    focus:ring-offset-0
                    outline-none
                    shadow-none
                    !ring-0
                    !ring-offset-0
                    transition-colors
                    duration-200
                    placeholder:text-[13px]
                    placeholder:translate-y-[-1.5px] "/>
                <div>

                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="
                      border-2 border-[#eaebed]
                      focus:border-[#4ca1af]
                      focus:ring-0
                      focus:ring-offset-0
                      outline-none
                      shadow-none
                      !ring-0
                      !ring-offset-0
                      transition-colors
                      duration-200
                      placeholder:text-[13px]
                      placeholder:translate-y-[-1.5px] "/>
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="
                      border-2 border-[#eaebed]
                      focus:border-[#4ca1af]
                      focus:ring-0
                      focus:ring-offset-0
                      outline-none
                      shadow-none
                      !ring-0
                      !ring-offset-0
                      transition-colors
                      duration-200
                      placeholder:text-[13px]"/>
                </div>

                <Button variant="outline" type="submit" className="flex-1 w-full bg-[#4ca1af] hover:bg-[#2c3e50] text-white border-[#426370] hover:border-[#4ca1af]">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-12 mt-3 fade-up">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#4ca1af] hover:text-[#2c3e50] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-[13.5px] sm:text-[16px]">dzikraahsan10@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#4ca1af] hover:text-[#2c3e50] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-[13.5px] sm:text-[16px]">+62 831 3531 9058</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#4ca1af] hover:text-[#2c3e50] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground text-[13.5px] sm:text-[16px]">Majalengka, Jawa Barat</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
