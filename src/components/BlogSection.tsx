import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

export default function BlogSection() {
  return (
    <section id="blog" className="toz-section bg-[#0d0118]">
      <div className="toz-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#a78bfa] text-sm font-semibold uppercase tracking-widest">
              Blog & Haberler
            </span>
            <h2 className="toz-heading text-white mt-3">
              Son <span className="text-[#22d3ee]">Yazılar</span>
            </h2>
            <p className="toz-subheading mx-auto mt-4 text-gray-400">
              Yapı teknolojileri, enerji verimliliği ve sürdürülebilirlik alanındaki güncel içeriklerimiz.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/blog/${p.slug}`}>
                <Card className="toz-card-hover h-full border-border group cursor-pointer product-glow-hover rounded-2xl bg-[#1a0524]/50">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-3 text-xs bg-[#8b5cf6]/20 text-[#a78bfa]">
                      {p.tag}
                    </Badge>
                    <CardTitle className="text-lg leading-snug text-white group-hover:text-[#22d3ee] transition-colors">
                      {p.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-400">{p.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {p.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {p.readTime}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-[#8b5cf6]/20 border-[#8b5cf6]/30 text-[#a78bfa] hover:bg-[#8b5cf6]/30 hover:text-white transition-colors">
                      Devamını Oku <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
