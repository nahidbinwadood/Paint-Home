const Blog = () => {
  return (
    <div className="mt-40 container mx-auto">
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
        <h2 className="inter text-5xl font-bold text-center ">
          Latest Articles & Blog
        </h2>
        <p className="w-2/3 mx-auto mt-4 text-center leading-relaxed text-gray-600">
          Discover our latest articles and blog posts for insightful
          perspectives, expert advice, and timely updates on a diverse range of
          topics. Stay informed, inspired, and engaged with our
          thought-provoking content. Explore now for fresh insights and ideas.
        </p>
      </div>

      <section
      data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
       className="py-10 ws  sm:py-16 lg:py-14">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid  max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full"
                  src="https://templatekit.jegtheme.com/articio/wp-content/uploads/sites/230/2022/01/drawing.jpg"
                  alt=""
                />
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
                {" "}
                Application{" "}
              </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="">
                  Mastering the Art of Sketching: Essential Techniques for
                  Aspiring Artists
                </a>
              </p>
              <p className="mt-4 text-gray-500">
                Mastering the Art of Sketching: Essential Techniques for
                Aspiring Artists Unlock the secrets of sketching with our
                comprehensive guide! From mastering basic strokes to creating
                intricate details, delve into shading, perspective, and
                composition. Whether you are a beginner or an experienced
                artist, elevate your skills and unleash your creativity on
                paper. Discover how to breathe life into your drawings and
                capture the essence of your subjects with confidence and
                precision.
              </p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {" "}
                Oliver Omnibus. June 12, 2021{" "}
              </span>
            </div>

            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full"
                  src="https://templatekit.jegtheme.com/articio/wp-content/uploads/sites/230/2022/01/smiling-teacher-and-pupil-painting-in-workshop-of-art-school.jpg"
                  alt=""
                />
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
                {" "}
                Insight{" "}
              </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="">
                  From Blank Canvas to Masterpiece: Unleashing Your Creativity
                  Painting
                </a>
              </p>
              <p className="mt-4 text-gray-500">
                From Blank Canvas to Masterpiece: Unleashing Your Creativity
                Through Painting Embark on a transformative journey of
                self-expression through painting! Dive into the world of color
                theory, brush techniques, and composition to turn a blank canvas
                into a captivating work of art. Explore the boundless
                possibilities of painting as you experiment with different
                styles and subjects. Let your imagination run wild and watch as
                your creativity flourishes with every brushstroke.
              </p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {" "}
                Liam Literary . June 12, 2023{" "}
              </span>
            </div>

            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full"
                  src="https://templatekit.jegtheme.com/articio/wp-content/uploads/sites/230/2022/01/graphic-designer-e1643358533161.jpg"
                  alt=""
                />
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
                {" "}
                Painting{" "}
              </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="">
                  The Healing Power of Art: Exploring the Benefits of Drawing
                  and Painting
                </a>
              </p>
              <p className="mt-4 text-gray-500">
                The Healing Power of Art: Exploring the Therapeutic Benefits of
                Drawing and Painting Discover the profound impact of art on
                mental well-being and self-discovery. Through painting reduce
                stress, and enhance your overall sense of well-being. Dive into
                the benefits of creative expression as you explore your emotions
                and connect with your inner self. Unleash the healing power of
                art and experience a profound sense of peace and fulfillment in
                your life.
              </p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {" "}
                Sofia Storyteller . January 12, 2024{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
