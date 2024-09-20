import AnchorExercise from "./AnchorExercise";
import FormExercise from "./FormExercise";
import ListsExercise from "./ListsExercise";
import TableExercise from "./TableExercise";

export default function Lab1() {
  return (
    <div>
      <h2>Lab 1</h2>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph. We often separate a long set of sentences with
          vertical spaces to make the text easier to read. Browsers ignore
          vertical white spaces and render all the text as one single set of
          sentences. To force the browser to add vertical spacing, wrap the
          paragraphs you want to separate with the paragraph tag
        </p>
        <p>
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p>
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p>
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      <ListsExercise />
      <TableExercise />

      {/* Image Tag */}
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship image"
        />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" alt="Tesla Bot image" />
      </div>
      <FormExercise />
      <AnchorExercise />
    </div>
  );
}