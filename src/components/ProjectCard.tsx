import Image from "next/image";
import Video from "next-video";
import {
  ArrowRight,
  ExternalLink,
  Video as VideoIcon,
  Star,
} from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    type: string;
    client: string;
    description: string;
    image: string;
    video: string | null;
    results: Record<string, string>;
    tags: string[];
    featured: boolean;
  };
  isFeatured?: boolean;
  viewMode?: "grid" | "list";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isFeatured = false,
  viewMode = "grid",
}) => {
  const isList = viewMode === "list";
  const layoutClass = isList || isFeatured ? "lg:flex" : "flex flex-col";
  const mediaClass = isList
    ? "lg:w-1/2 w-full flex-shrink-0 aspect-video lg:aspect-auto"
    : isFeatured
      ? "lg:w-1/2 w-full aspect-[16/10]"
      : "w-full aspect-video";
  const contentClass = isList || isFeatured ? "lg:w-1/2 w-full" : "w-full";
  const padding = isFeatured ? "p-8" : "p-6";
  const h3Size = isFeatured ? "text-2xl" : "text-xl";
  const resultsGrid =
    isList || isFeatured ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2";
  const resultsSlice =
    isList || isFeatured ? Object.entries(project.results).length : 2;
  const tagsSlice = isFeatured ? project.tags.length : 3;
  const gradientOpacity = isFeatured ? "80" : "60";
  const starContainer = isFeatured
    ? "px-3 py-1 flex items-center"
    : "p-2 rounded-full";
  const starText = isFeatured ? (
    <span className="text-white font-semibold text-xs">Featured</span>
  ) : null;
  const tagsClass = isFeatured
    ? "px-3 py-1 text-sm border border-white/20"
    : "px-2 py-1 text-xs";
  const tagsGap = isFeatured ? "gap-2" : "gap-1";
  const tagsMb = isFeatured ? "mb-6" : "mb-4";
  const resultsMb = isFeatured ? "mb-6" : "mb-4";
  const descMb = isFeatured ? "mb-6" : "mb-4";

  // Media content handling
  const mediaContent = project.video ? (
    <Video
      src={project.video}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  ) : (
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      priority={isFeatured}
    />
  );

  return (
    <div className="group">
      <div
        className={`bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] ${layoutClass}`}
      >
        <div className={`${mediaClass} relative overflow-hidden`}>
          {mediaContent}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/${gradientOpacity} via-transparent to-transparent`}
          ></div>
          <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-white text-xs font-semibold">
            {project.category}
          </div>
          {project.featured && (
            <div
              className={`absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 ${starContainer}`}
            >
              <Star className="w-4 h-4 text-white mr-1" />
              {starText}
            </div>
          )}
        </div>
        <div className={`${contentClass} ${padding} flex-1`}>
          <h3
            className={`${h3Size} font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300`}
          >
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-2">{project.client}</p>
          <p className={`text-gray-200 leading-relaxed ${descMb}`}>
            {project.description}
          </p>
          <div className={`grid ${resultsGrid} gap-4 ${resultsMb}`}>
            {Object.entries(project.results)
              .slice(0, resultsSlice)
              .map(([key, value], idx) => (
                <div key={idx} className="text-center">
                  <h4 className="text-white font-bold text-lg">{value}</h4>
                  <p className="text-gray-400 text-sm capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                </div>
              ))}
          </div>
          <div className={`flex flex-wrap ${tagsGap} ${tagsMb}`}>
            {project.tags.slice(0, tagsSlice).map((tag, idx) => (
              <span
                key={idx}
                className={`bg-white/10 rounded-full text-gray-300 ${tagsClass}`}
              >
                {tag}
              </span>
            ))}
          </div>
          {isFeatured ? (
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                <span className="mr-2">View Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button className="w-full bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white font-semibold py-3 px-6 rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group">
              <span className="mr-2">View Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
