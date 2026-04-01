import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

export default function BlogSection() {
  return (
    <section id="blog" className="toz-section bg-toz-cream">
      <div className="toz-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[0.95rem] md:text-[1.02rem] text-primary font-semibold uppercase tracking-widest">
              Blog & Haberler
            </span>
            <h2 className="toz-heading mt-3">
              Son Yazılar
            </h2>
            <p className="toz-subheading mx-auto mt-4">
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
                <Card className="toz-card-hover h-full border-border group cursor-pointer product-glow-hover rounded-2xl">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-3 text-xs">
                      {p.tag}
                    </Badge>
                    <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{p.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {p.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {p.readTime}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
