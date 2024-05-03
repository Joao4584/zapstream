import ChildrenProps from "@/@types/children";

export default function CardSection({ children, className = "" }: ChildrenProps) {


    return (
        <section className={`card-gray  ${className}`}>
            {children}
        </section>
    )
}