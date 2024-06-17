import { useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';


export interface ExpandableTagProps {
    unhoveredText?: string;
    hoveredText?: string;
}

function ExpandableTag({ unhoveredText, hoveredText }: ExpandableTagProps) {
    const width = useRef(0);
    const ref = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    return (
        <LayoutGroup>
            <motion.div
                className="inline-block"
                style={{ minWidth: width.current }}
                onHoverStart={() => {
                    if (!isHovering) {
                        width.current = ref?.current?.offsetWidth || 0;
                    }
                    setIsHovering(true);
                }}
                onHoverEnd={() => setIsHovering(false)}
            >
                <motion.div
                    ref={ref}
                    layout
                    className="inline-block relative text-gray-300 bg-gray-900 ring-1 ring-gray-800 px-4 py-1.5 tracking-wider text-sm font-medium whitespace-nowrap"
                    style={{ borderRadius: 8 }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={isHovering ? 'hovering' : 'unhovering'}
                        >
                            {isHovering ? hoveredText : unhoveredText}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </LayoutGroup>
    );
}

export default ExpandableTag;