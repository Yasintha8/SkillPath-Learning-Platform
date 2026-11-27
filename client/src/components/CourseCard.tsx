import { Link } from "react-router-dom";

export interface CourseData {
    _id: string;
    title: string;
    description: string;
    category: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    price: number;
    thumbnail: string;
    instructorName: string;
    lectures?: Array<{ _id: string; title: string; duration?: string }>;
    entrolledStudents?: string[];
    progressPercentage?: number;
    completedLecturesCount?: number;
}

interface CourseCardProps {
    course: CourseData;
    isEnrolled?: boolean;
}

const CourseCard = ({ course, isEnrolled }: CourseCardProps) => {

    const lectureCount = course.lectures?.length || 0;
    const isFree = course.price === 0;

    return (
        <Link to={isEnrolled ? `/learn/${course._id}` : `/courses/${course._id}`} className="group course-card">
            <div>
                {/*Thumbnail Header */}
                <div className="relative aspect-video w-full overflow-hidden bg-secondary/5">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300" loading="lazy" />

                </div>
            </div>
            <div>

            </div>
        </Link>
    )
}

export default CourseCard