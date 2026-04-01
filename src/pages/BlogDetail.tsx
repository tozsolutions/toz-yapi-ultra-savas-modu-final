import { useParams, Link } from "react-router-dom";
import { getBlogBySlug, blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">Yazı bulunamadı</h1>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Ana Sayfaya Dön
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header area */}
      <div className="bg-toz-gradient pt-24 pb-12">
        <div className="toz-container">
          <Link to="/#blog" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Blog'a Dön
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              {post.tag}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="toz-container py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 prose prose-lg max-w-none text-foreground prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-ul:text-muted-foreground"
          >
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("## ")) {
                return <h2 key={i}>{para.replace("## ", "")}</h2>;
              }
              if (para.startsWith("### ")) {
                return <h3 key={i}>{para.replace("### ", "")}</h3>;
              }
              if (para.startsWith("- ")) {
                const items = para.split("\n").filter(Boolean);
                return (
                  <ul key={i}>
                    {items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                    ))}
                  </ul>
                );
              }
              return <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
            })}
          </motion.article>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-4">Diğer Yazılar</h3>
              <div className="space-y-3">
                {blogPosts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 5)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      to={`/blog/${p.slug}`}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <Badge variant="secondary" className="text-xs mb-1">{p.tag}</Badge>
                      <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                        {p.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">{p.date}</span>
                    </Link>
                  ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-toz-turquoise mb-3">Teklif Alın</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Projeleriniz için ücretsiz keşif ve teklif almak ister misiniz?
              </p>
              <a href="tel:+905367731404">
                <Button className="w-full bg-primary text-primary-foreground">
                  Hemen Arayın
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
