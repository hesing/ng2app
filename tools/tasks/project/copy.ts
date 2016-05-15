import * as gulp from 'gulp';
import { APP_DEST, APP_SRC, ENV, FILE_TO_COPY } from '../../config';

const isProd = ENV === 'prod';

export = () => {

	if (isProd) {
		return gulp.src(FILE_TO_COPY, { base: APP_SRC })
			.pipe(gulp.dest(APP_DEST));
	} else {
		// copy fonts only in prod, images already copied with images task
		return gulp.src(FILE_TO_COPY, { base: APP_SRC })
			.pipe(gulp.dest(APP_DEST));
	}
};
