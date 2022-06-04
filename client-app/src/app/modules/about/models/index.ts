export interface Testimonial {
    id: number;
    order: number;
    comment: string;
    author: string;
    avatar: string;
}

export interface AboutContext {
    message: string;
    testimonials: Testimonial[];
}