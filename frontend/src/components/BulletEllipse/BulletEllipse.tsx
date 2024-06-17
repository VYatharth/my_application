export interface BulletEllipseProps {
    text: string;
    bulletClasses?: string;
    textClasses?: string;
}

const BulletEllipse = ({ text, bulletClasses, textClasses }: BulletEllipseProps) => {
    return (
        <div className="flex items-center">
            <div>
                <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  mr-3 ${bulletClasses ?? 'bg-primary/[.2]'}`}>
                    <i className="fas fa-fingerprint"></i>
                </span>
            </div>
            <div>
                <h4 className={textClasses}>
                    {text}
                </h4>
            </div>
        </div>
    );
};

export default BulletEllipse;
