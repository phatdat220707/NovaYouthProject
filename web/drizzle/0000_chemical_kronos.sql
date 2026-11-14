CREATE TABLE `attempts` (
	`id` text PRIMARY KEY NOT NULL,
	`count` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `facilities` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`lat` real NOT NULL,
	`lng` real NOT NULL,
	`kind` text NOT NULL,
	`status` text NOT NULL,
	`photo_id` text,
	`note` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`demo` integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `observations` (
	`id` text PRIMARY KEY NOT NULL,
	`facility_id` text NOT NULL,
	`photo_id` text,
	`report_type` text NOT NULL,
	`note` text NOT NULL,
	`state` text DEFAULT 'pending' NOT NULL,
	`created_at` text NOT NULL,
	`reviewed_at` text,
	`review_note` text
);
--> statement-breakpoint
CREATE TABLE `photos` (
	`id` text PRIMARY KEY NOT NULL,
	`object_key` text NOT NULL,
	`content_type` text NOT NULL,
	`assessment` text NOT NULL,
	`created_at` text NOT NULL
);
