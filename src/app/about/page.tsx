"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Heart, Star, Clock } from "lucide-react";
import SubPageHeader from "@/components/SubPageHeader";



export default function AboutUs() {
  return (
    <>
      <SubPageHeader title="About Us" />
      <main className="min-h-screen bg-white text-black">
        {/* About Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Our Journey</h2>
              <p className="text-gray-600 text-lg">
                Since our establishment, Shree Sai Photography has been
                dedicated to capturing life&apos;s most precious moments with
                artistry and precision. Our passion for photography goes beyond
                just taking pictures – we create visual stories that last a
                lifetime.
              </p>
              <p className="text-gray-600 text-lg">
                With state-of-the-art equipment and years of expertise, we
                specialize in weddings, corporate events, family portraits, and
                fashion photography. Each shot is carefully crafted to reflect
                the unique essence of the moment.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-bold">10+ Years</h3>
                  <p className="text-gray-600">Of Experience</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-bold">2000+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/img-3.jpeg"
                alt="Professional photographer at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-50 py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Our Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Wedding Photography",
                  description:
                    "Capturing your special day with elegance and style",
                },
                {
                  icon: Heart,
                  title: "Family Portraits",
                  description: "Beautiful family moments frozen in time",
                },
                {
                  icon: Star,
                  title: "Fashion Shoots",
                  description: "Professional fashion and portfolio photography",
                },
                {
                  icon: Clock,
                  title: "Event Coverage",
                  description: "Comprehensive coverage of your special events",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <service.icon className="w-12 h-12 mx-auto mb-6 text-primary" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>

           
          </div>
        </section>

       
      </main>
    </>
  );
}
