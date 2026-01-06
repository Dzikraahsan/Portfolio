import { Card, CardContent } from "@/components/ui/card";

const Biodata = () => {
  const biodataItems = [
    { label: "NAME", value: "Dzikra Ahsan Imawan" },
    { label: "BORN IN", value: "Majalengka, 27 September 2008" },
    {
      label: "ADDRESS",
      value: "Desa Sindangkerta, Kec. Maja, Kab. Majalengka",
    },
    { label: "STATUS", value: "Student - Grade 12" },
    {
      label: "INTEREST",
      value: "Front-Heavy Fullstack Development, Web Development",
    },
  ];

  return (
    <section id="biodata" className="py-20 px-2">
      <div className="container mx-auto">
        <h2 className="text-[25px] text-center mb-9 md:mb-12 md:text-4xl formular-bold">
          BIODATA
        </h2>

        <div className="md:max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                {biodataItems.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-border/40 last:border-0 last:pb-0"
                  >
                    <div className="font-semibold text-foreground formular-bold text-[16px] md:text-base">
                      {item.label}
                    </div>
                    <div className="md:col-span-2 text-muted-foreground text-[13px] md:text-base">
                      {item.value}
                    </div>
                  </div>
                ))}

                <div className="mt-8 pt-4 border-t border-border/40">
                  <p className="text-[12.5px] md:text-base italic text-muted-foreground text-center">
                    "Don’t aim to be perfect. Aim to be better than yesterday."
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground/70 text-center mt-2">
                    — Steve Jobs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Biodata;
